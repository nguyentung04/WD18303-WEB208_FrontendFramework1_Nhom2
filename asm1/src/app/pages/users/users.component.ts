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
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private postService: PostService2, private router: Router) { }

  ngOnInit() {
    // Subscribe to user data
    this.postService.users$.subscribe((login: Iusers[]) => {
      this.login = login.map(user => ({
        ...user,
        date_start: new Date(user.date_start).toLocaleDateString(),
      }));
     
    });
  
    // Check for activated child routes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/users/');
      }
    });
  
    // Fetch user data
    this.getLogin();
  }
  
  
  getLogin() {
    this.postService.getAllUser2(this.table).subscribe();
  
    this.postService.getAllUser(this.table).subscribe((login: Iusers[]) => {
      this.login = login.map(user => ({
        ...user,
        date_start: new Date(user.date_start).toLocaleDateString(), 
      }));
      console.log('User data from getAllUser:', this.login); // Log dữ liệu từ getAllUser
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

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.login.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.login.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  totalPagesArray(): number[] {
    const totalPages = Math.ceil(this.login.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
  
  setCurrentPage(page: number) {
    this.currentPage = page;
  }
}