import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }
	openSnackBar(message: string, action: string) {
	    this.snackBar.open(message, action, {
	      duration: 2000,
	      verticalPosition: 'top',
	      horizontalPosition: 'right',
	    });
  	}

  ngOnInit() {
  }

}
