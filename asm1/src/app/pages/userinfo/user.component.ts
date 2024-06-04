import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class userComponent implements OnInit {
  showRouterOutlet: boolean = false;

  ngOnInit() {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/userinfo/');
      }
    });
  }


  constructor(private router: Router) {

  }

  add() {
    this.router.navigate(['/pages/userinfo/create'])
  }
  edit() {
    this.router.navigate(['/pages/userinfo/edit'])
  }
  delete() {
    this.router.navigate(['/pages/userinfo/delete'])
  }

}