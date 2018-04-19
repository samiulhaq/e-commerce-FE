import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-user-order-detail',
  templateUrl: './user-order-detail.component.html',
  styleUrls: ['./user-order-detail.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UserOrderDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
