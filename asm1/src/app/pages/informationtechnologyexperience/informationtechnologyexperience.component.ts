import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from './../../@core/services/apis/post.service';
import { informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Component({
  selector: 'ngx-activity',
  styleUrls: ['./Informationtechnologyexperience.component.scss'],
  templateUrl: './Informationtechnologyexperience.component.html',
})
export class InformationtechnologyexperienceComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listInformationtechnologyexperience: informationtechnologyexperience[] = [];
  table: string = 'informationtechnologyexperience';

  constructor(private router: Router, private informationtechnologyexperienceService: PostService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/informationtechnologyexperience/');
      }
    });
    this.getAll();
  }

  getAll() {
    this.informationtechnologyexperienceService.getAllInformationtechnologyexperience(this.table).subscribe(data => {
      console.log(data);
      this.listInformationtechnologyexperience = data;
    });
  }

  deleteInformationtechnologyexperience(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.informationtechnologyexperienceService.deleteInformationtechnologyexperience(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }

  add() {
    this.router.navigate(['/pages/informationtechnologyexperience/create']);
  }

  edit(id: string) {
    this.router.navigate([`/pages/informationtechnologyexperience/edit/${id}`]);
  }
}
