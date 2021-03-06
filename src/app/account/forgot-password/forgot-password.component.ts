import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../../router.animations';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})
export class ForgotPasswordComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	hide = true;

	getErrorMessage() {
	return this.email.hasError('required') ? 'You must enter a value' :
	  this.email.hasError('email') ? 'Not a valid email' :
	    '';
	}
  constructor() { }

  ngOnInit() {
  }

}
