import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

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
