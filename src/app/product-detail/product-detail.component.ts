declare var require: any;

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

const img1 = require ('assets/product-images/test.jpg');
const img2 = require ('assets/product-images/test2.jpg');

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})

export class ProductDetailComponent implements OnInit {
	imageSource1 = img1;
  	imageSource2 = img2;

  constructor() { }

  ngOnInit() {
  }

}
