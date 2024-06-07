import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { activity } from 'app/@core/interfaces/pages/activity';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
})
export class activityComponent implements OnInit {
  showRouterOutlet: boolean = false;
  listActivity: activity[] = [];

  constructor(private router: Router, private activityService: PostService) {}

  ngOnInit(): void {
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/activity/');
      }
    });

    // Gọi hàm lấy dữ liệu từ service
    this.activityService.getAllActivity('activity').subscribe(
      (data) => {
        this.listActivity = data;
      },
      (error) => {
        console.error('Error fetching activity data', error);
      }
    );
  }

  add() {
    this.router.navigate(['/pages/activity/create']);
  }
  edit(id: number) {
    this.router.navigate(['/pages/activity/edit',id]);
  }
  delete(id: number) {
    this.router.navigate(['/pages/activity/delete']);
  }
}
