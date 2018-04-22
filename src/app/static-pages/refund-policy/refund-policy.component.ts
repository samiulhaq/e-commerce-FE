import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-refund-policy',
  	templateUrl: './refund-policy.component.html',
  	styleUrls: ['./refund-policy.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})
export class RefundPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
