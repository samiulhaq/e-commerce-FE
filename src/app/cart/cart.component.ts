import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  	selector: 'app-cart',
  	templateUrl: './cart.component.html',
  	styleUrls: ['./cart.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
