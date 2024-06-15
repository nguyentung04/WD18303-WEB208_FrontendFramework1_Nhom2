import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from './../../@core/services/apis/post.service';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';
import { informationtechnologyexperienceService } from 'app/@core/services/apis/informationtechnologyexperience.service';

@Component({
  selector: 'ngx-activity',
  styleUrls: ['./Informationtechnologyexperience.component.scss'],
  templateUrl: './Informationtechnologyexperience.component.html',
})
export class InformationtechnologyexperienceComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listInformationtechnologyexperience: Informationtechnologyexperience[] = [];
  table: string = 'informationtechnologyexperience';

  constructor(
    private router: Router,
    private informationtechnologyexperienceService: informationtechnologyexperienceService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.informationtechnologyexperienceService
      .getAllInformationtechnologyexperience(this.table)
      .subscribe((data) => {
        console.log(data);
        this.listInformationtechnologyexperience = data;
      });
  }

  delete(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.informationtechnologyexperienceService.delete(this.table, Id).subscribe(
        (res) => {
          console.log('Xóa thành công');
          this.getAll();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  add() {
    this.router.navigate(['/pages/informationtechnologyexperience/create']);
  }

  edit(id: string) {
    this.router.navigate([`/pages/informationtechnologyexperience/edit/${id}`]);
  }
}
