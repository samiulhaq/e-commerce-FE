import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-privacy-policy',
  	templateUrl: './privacy-policy.component.html',
  	styleUrls: ['./privacy-policy.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
