import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
