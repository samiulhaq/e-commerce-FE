import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UserOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
