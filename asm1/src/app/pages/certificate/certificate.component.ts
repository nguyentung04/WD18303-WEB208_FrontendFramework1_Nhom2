import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
})
export class certificateComponent implements OnInit {
  showRouterOutlet: boolean = false;

  ngOnInit() {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/recruitment/');
      }
    });
  }


  constructor(private router: Router) {

  }

  add() {
    this.router.navigate(['/pages/recruitment/create'])
  }
  edit() {
    this.router.navigate(['/pages/recruitment/edit'])
  }
  delete() {
    this.router.navigate(['/pages/recruitment/delete'])
  }
}
