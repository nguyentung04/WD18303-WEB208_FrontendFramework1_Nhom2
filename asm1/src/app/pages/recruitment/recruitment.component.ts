import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService }  from '../../@core/services/apis/post.service'
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
<<<<<<< HEAD
import { RecruitmenttService } from 'app/@core/services/apis/recruitment';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./recruitment.component.scss'],
  templateUrl: './recruitment.component.html',
})
export class recruitmentComponent implements OnInit {
  showRouterOutlet: boolean = false;
  recruitmentList: recruitment[] = [] ;
<<<<<<< HEAD
  table: string = 'recruitment';
  table1: string = 'userinfo';
  list: IuserInfo[] = [];
  id: string
  constructor(private router: Router, private recruitment: RecruitmenttService) {
  }

  ngOnInit() {

    this.recruitment.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/recruitment/');
        
      }
    });
    this.getAll();
    // this.getUserById();
    // this.getAllUser();

  }



=======
  table: string = 'recruitment'

  constructor(private router: Router, private recruitment: PostService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/recruitment/');
      }
    });
    this.getAll();


  }

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  getAll() {
    this.recruitment.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.recruitmentList = data;
    })
  }
<<<<<<< HEAD
  // getUserById() {
  //   this.recruitment.getUserById(this.id, this.table1).subscribe(data => {
  //     console.log(data);
  //     this.list = data;
  //   });
  // }
  // getAllUser() {
  //   this.recruitment.getAllUser(this.table1).subscribe(data => {
  //     console.log(data);
  //     this.list = data;
  //   })
  // }
=======


>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

  deleteRe(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.recruitment.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }


  add() {
    this.router.navigate(['/pages/recruitment/create'])
  }
<<<<<<< HEAD
  editRe(id: string) {
=======
  edit(id: string) {
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    this.router.navigate([`/pages/recruitment/edit/${id}`])
  }
}