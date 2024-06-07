import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./informationtechnologyexperience.component.scss'],
  templateUrl: './informationtechnologyexperience.component.html',
})
export class informationtechnologyexperienceComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listInformationtechnologyexperience: Informationtechnologyexperience[] = [];
  ngOnInit() {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes(
          '/informationtechnologyexperience/'
        );
      }
    });

    this.informationtechnologyexperience.getAllActivity('informationtechnologyexperience').subscribe(
      (data) => {
        this.listInformationtechnologyexperience = data;
      },
      (error) => {
        console.error('Error fetching informationtechnologyexperience data', error);
      }
    );
  }

  constructor(
    private router: Router,
    private informationtechnologyexperience: PostService
  ) {}

  add() {
    this.router.navigate(['/pages/informationtechnologyexperience/create']);
  }
  edit() {
    this.router.navigate(['/pages/informationtechnologyexperience/edit']);
  }
  delete() {
    this.router.navigate(['/pages/informationtechnologyexperience/delete']);
  }
}
