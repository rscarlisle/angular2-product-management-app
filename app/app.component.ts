import { Component } from '@angular/core';
	
@Component({
	selector: 'pm-app',
	template: 
	`
		<div><h1>{{pageTitle}}</h1>
<<<<<<< HEAD
				<pm-products></pm-products>
=======
			<pm-products></pm-products>
>>>>>>> 26084671335d3e0eb397fc538f0520add55d83e2
		</div>
	`
})
export class AppComponent {
	pageTitle: string = 'Amazon Product Management';
}
