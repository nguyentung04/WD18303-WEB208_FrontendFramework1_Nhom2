import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService }  from '../../@core/services/apis/post.service'
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./recruitment.component.scss'],
  templateUrl: './recruitment.component.html',
})
export class recruitmentComponent implements OnInit {
  showRouterOutlet: boolean = false;
  recruitmentList: recruitment[] = [] ;
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

  getAll() {
    this.recruitment.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.recruitmentList = data;
    })
  }



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
  editRe(id: string) {
    this.router.navigate([`/pages/recruitment/edit/${id}`])
  }
}