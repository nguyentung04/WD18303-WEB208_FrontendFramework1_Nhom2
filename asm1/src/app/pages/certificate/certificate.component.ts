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
  certificateList: certificate[] = [] ;
  table: string = 'certificate'

  constructor(private router: Router, private certificate: PostService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/certificate/');
      }
    });
    this.getAll();


  }

  getAll() {
    this.certificate.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.certificateList = data;
    })
  }



  deleteCer(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.certificate.deleteUser(this.table, Id).subscribe(
        () => {
          console.log('Xóa thành công');
          this.getAll();
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  


  add() {
    this.router.navigate(['/pages/certificate/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/certificate/edit/${id}`])
  }

 

}
