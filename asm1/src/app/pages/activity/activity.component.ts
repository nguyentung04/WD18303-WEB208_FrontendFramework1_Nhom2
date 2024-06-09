import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from './../../@core/services/apis/post.service';
import { Activity } from 'app/@core/interfaces/pages/activity';

@Component({
  selector: 'ngx-activity',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listActivity: Activity[] = [];
  table: string = 'activity';

  constructor(private router: Router, private activityService: PostService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/activity/');
      }
    });
    this.getAll();
  }

  getAll() {
    this.activityService.getAllActivity(this.table).subscribe(data => {
      console.log(data);
      this.listActivity = data;
    });
  }

  deleteCer(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.activityService.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
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
