if (!('serviceWorker' in navigator)) {
  console.log('Service Worker not supported');
  return;
}

navigator.serviceWorker.register('/service-worker.js')
.then(function(registration) {
  console.log('SW registered! Scope is:', registration.scope);
}); // .catch a registration error

navigator.serviceWorker.register('/service-worker.js', {
  scope: '/app/'
});

navigator.serviceWorker.register('/sw.js');

// Later request a one-off sync:
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('foo');
});

self.addEventListener('sync', function(event) {
  if (event.tag === 'foo') {
    event.waitUntil(doSomething());
  }
});

// var options = {...}
self.addEventListener('push', function(event) {
    event.waitUntil(
      self.registration.showNotification('Hello!', options);
    );
});
