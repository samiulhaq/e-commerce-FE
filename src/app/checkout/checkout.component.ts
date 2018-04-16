import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CheckoutComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  get firstName() { return this.firstFormGroup.get('firstName'); };
  get lastName() { return this.firstFormGroup.get('lastName'); };
  get cityName() { return this.firstFormGroup.get('cityName'); };
  get stateName() { return this.firstFormGroup.get('stateName'); };
  get streetName() { return this.firstFormGroup.get('streetName'); };
  get phNo() { return this.firstFormGroup.get('phNo'); };

  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  check(event: KeyboardEvent) {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cityName: ['', Validators.required],
      stateName: ['', Validators.required],
      streetName: ['', Validators.required],
      phNo: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({

    });
  }

}
