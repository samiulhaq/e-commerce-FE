import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 @ViewChild('sidenav') sidenav : MatSidenav;

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationStart) {
        this.sidenav.close();
      }
    });
  }
  
}
