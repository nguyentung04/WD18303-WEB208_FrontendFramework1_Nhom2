import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PostService }  from '../../@core/services/apis/post.service'
import { certificate } from 'app/@core/interfaces/pages/certificate';
<<<<<<< HEAD
import { CertificateService } from 'app/@core/services/apis/certificate';
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
})
export class certificateComponent implements OnInit {
  showRouterOutlet: boolean = false;
  certificateList: certificate[] = [] ;
  table: string = 'certificate'

<<<<<<< HEAD
  constructor(private router: Router, private certificate: CertificateService) {
=======
  constructor(private router: Router, private certificate: PostService) {
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
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
<<<<<<< HEAD
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
  
=======
      this.certificate.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


  add() {
    this.router.navigate(['/pages/certificate/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/certificate/edit/${id}`])
  }

 

}
