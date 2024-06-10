import { IuserInfo } from './../../@core/interfaces/pages/userinfo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/@core/services/apis/post.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  showRouterOutlet: boolean = false;

  lists: IuserInfo[] = [];

  table: string = 'userinfo';

  constructor(private router: Router, private UserInfo: PostService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/cv/');
      }
    });
    this.getAll();
  }

  getAll() {
    this.UserInfo.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }

  detail(id: string) {
    this.router.navigate([`/pages/cv/cvdetail/${id}`]);
  }
}
