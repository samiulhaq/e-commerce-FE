import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UserProfileComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  showPassword = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor() { }

  ngOnInit() {
  }

}
