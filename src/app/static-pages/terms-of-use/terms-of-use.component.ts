import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
	selector: 'app-terms-of-use',
	templateUrl: './terms-of-use.component.html',
	styleUrls: ['./terms-of-use.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class TermsOfUseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
