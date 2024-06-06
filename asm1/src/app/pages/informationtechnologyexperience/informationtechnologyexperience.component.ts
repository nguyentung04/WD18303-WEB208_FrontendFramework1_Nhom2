import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./informationtechnologyexperience.component.scss'],
  templateUrl: './informationtechnologyexperience.component.html',
})
export class informationtechnologyexperienceComponent implements OnInit {
  showRouterOutlet: boolean = false;

  ngOnInit() {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/informationtechnologyexperience/');
      }
    });
  }


  constructor(private router: Router) {

  }

  add() {
    this.router.navigate(['/pages/informationtechnologyexperience/create'])
  }
  edit() {
    this.router.navigate(['/pages/informationtechnologyexperience/edit'])
  }
  delete() {
    this.router.navigate(['/pages/informationtechnologyexperience/delete'])
  }

}