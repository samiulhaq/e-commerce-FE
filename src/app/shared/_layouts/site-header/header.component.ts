import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   @ViewChild('sidenav') sidenav : MatSidenav;

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationStart) {
        this.sidenav.close();
      }
    });
  }

  ngOnInit() {
  }

}
