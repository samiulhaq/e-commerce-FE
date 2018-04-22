import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations'

@Component({
  selector: 'app-user-shipping-address',
  templateUrl: './user-shipping-address.component.html',
  styleUrls: ['./user-shipping-address.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UserShippingAddressComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
