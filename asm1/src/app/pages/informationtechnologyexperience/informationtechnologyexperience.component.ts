import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from './../../@core/services/apis/post.service';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

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
    private informationtechnologyexperienceService: PostService
  ) {}

  ngOnInit() {
   
    this.getAll();
  }

  getAll() {
    this.informationtechnologyexperienceService
      .getAllUser(this.table)
      .subscribe((data) => {
        console.log(data);
        this.listInformationtechnologyexperience = data;
      });
  }

  activityService;
  deleteInformationtechnologyexperience(id: string) {
    const Id = parseInt(id, 10);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.informationtechnologyexperienceService
        .deleteUser(this.table, Id)
        .subscribe(
          () => {
            console.log('Xóa thành công');
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([
                  '/pages/informationtechnologyexperience',
                ]);
              });
            this.listInformationtechnologyexperience =
              this.listInformationtechnologyexperience.filter(
                (activity) => activity.id !== Id.toString()
              );
          },
          (error) => {
            console.error(error);
            alert('Có lỗi xảy ra khi xóa. Vui lòng thử lại.');
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