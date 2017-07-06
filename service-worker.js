
self.addEventListener('install', function(event) {
  // Do stuff during install
console.log('SW v% Installed at', version, new Date().toLocaleTimeString());
  self.skipWaiting();
  event.waitUntil(
    // return Promise to install SW

  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // return Promise to activate SW

  );
  // Do stuff during activate
});

self.addEventListener('fetch',
function(event) {
  console.log(event.request.url);
  event.respondWith(
    fetch(event.request));
    // caches.match(event.request)
    // fetch(event.request));
  );
});
