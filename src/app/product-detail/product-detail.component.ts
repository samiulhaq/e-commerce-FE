import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})

export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
