import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
	selector: 'app-shipping-and-delivery',
	templateUrl: './shipping-and-delivery.component.html',
	styleUrls: ['./shipping-and-delivery.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class ShippingAndDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
