import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
	selector: 'app-size-chart',
	templateUrl: './size-chart.component.html',
	styleUrls: ['./size-chart.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class SizeChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
