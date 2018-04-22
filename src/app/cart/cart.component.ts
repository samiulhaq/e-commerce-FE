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

  	foods = [
	    {value: '1', viewValue: '1'},
	    {value: '2', viewValue: '2'},
	    {value: '3', viewValue: '3'}
	  ];

  	selectedValue: string = this.foods[0].value;

  constructor() { }

  ngOnInit() {
  }

}
