import { Router ,} from '@angular/router';
import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService2 } from '../../@core/services/apis/post.services';
import { Iusers } from 'app/@core/interfaces/pages/users';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class usersComponent implements OnInit {
  
  showRouterOutlet: boolean = false;
  login: Iusers[] = [];
  table: string = 'login';

  constructor(private postService: PostService2, private router: Router) { }

  ngOnInit() {
    this.getLogin()
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/users/');
      }
    });
  }

  getLogin() {
    this.postService.getAllUser(this.table).subscribe((login: Iusers[]) => {
      this.login = login.map(user => ({
        ...user,
        date_start: new Date(user.date_start).toLocaleDateString(), 
      }));
    });
  }
  
  addLogin() {
    this.router.navigate(['/pages/users/create']);
  }

  editLogin(id: number) {
    this.router.navigate(['/pages/users/edit', id]); 
  }

  deleteLogin(id: number) {
    if(confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      this.postService.deleteUsers(this.table, id).subscribe(() => {
        this.getLogin();
      });
    }
  }

  getRoleName(role_id: number): string {
    const roles: { [key: number]: string } = {
      1: 'Users',
      2: 'Admin'
    };
    return roles[role_id] || 'Unknown';
  }

  
}