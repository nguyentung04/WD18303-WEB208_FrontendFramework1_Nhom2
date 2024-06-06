import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
})
export class activityComponent implements OnInit {
  showRouterOutlet: boolean = false;

  ngOnInit() {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/activity/');
      }
    });
  }


  constructor(private router: Router) {

  }

  add() {
    this.router.navigate(['/pages/activity/create'])
  }
  edit() {
    this.router.navigate(['/pages/activity/edit'])
  }
  delete() {
    this.router.navigate(['/pages/activity/delete'])
  }

}