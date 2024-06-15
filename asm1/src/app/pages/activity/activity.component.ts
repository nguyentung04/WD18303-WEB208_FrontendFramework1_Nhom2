import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Activity } from 'app/@core/interfaces/pages/activity';
import { PostService2 } from 'app/@core/services/apis/activity.post.service';

@Component({
  selector: 'ngx-activity',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listActivity: Activity[] = [];
  table: string = 'activity';

  constructor(private router: Router, private activityService: PostService2) { }

  ngOnInit() {
   
    this.getAll();
  }

  getAll() {
    this.activityService.getAllActivity(this.table).subscribe(data => {
      console.log(data);
      this.listActivity = data;
    });
  }

  deleteActivity(id: string) {
    const Id = parseInt(id, 10);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.activityService.deleteActivity(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/pages/activity']);
        });
        this.listActivity = this.listActivity.filter(activity => activity.id !== Id.toString());
      }, error => {
        console.error(error);
        alert('Có lỗi xảy ra khi xóa. Vui lòng thử lại.');
      });
    }
  }
  

  add() {
    this.router.navigate(['/pages/activity/create']);
  }

  edit(id: string) {
    this.router.navigate([`/pages/activity/edit/${id}`]);
  }
}