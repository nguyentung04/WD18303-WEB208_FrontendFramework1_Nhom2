import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { IuserInfo } from './../../@core/interfaces/pages/userinfo';
import { PostService } from './../../@core/services/apis/post.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class userComponent implements OnInit {
  showRouterOutlet: boolean = false;

  userinfoList: IuserInfo[] = [];

  table: string = 'userinfo';

  constructor(private router: Router, private UserInfo: PostService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/userinfo/');
      }
    });
    this.getAll();

  }

  getAll() {
    this.UserInfo.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.userinfoList = data;
    })
  }

  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.UserInfo.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }


  add() {
    this.router.navigate(['/pages/userinfo/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/userinfo/edit/${id}`])
  }


}