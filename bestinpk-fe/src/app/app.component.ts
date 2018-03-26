import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	  testMenu() {
	  	console.log(this);
	  //  this.trigger.closeMenu();
	  } 
	
}
