import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService }  from '../../@core/services/apis/post.service'
import { certificate } from 'app/@core/interfaces/pages/certificate';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
})
export class certificateComponent implements OnInit {
  showRouterOutlet: boolean = false;
  login: certificate[] = [] ;
  table: string = 'certificate'

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {

    this.postService.getAllUser(this.table).subscribe(login => {
      this.login = login;
    });
  }

  addCer(user: any) {
    const tableName = 'certificate';
    this.postService.postCer(user, tableName).subscribe(() => {
      this.getLogin();
    });
  }

  editCer(id: number, user: any) { 
    const tableName = 'certificate';
    this.postService.putCer(user, id).subscribe(() => {
      this.getLogin();
    });
  }

  deleteCer(id: number) { 
    const tableName = 'certificate';
    this.postService.deleteUser(tableName, id).subscribe(() => {
      this.getLogin();
    });
  }
}
