// import { Component, OnInit } from '@angular/core';
// import { Activity } from 'app/@core/interfaces/pages/activity';
// import { PostService } from 'app/@core/services/apis/post.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { DataSet } from 'ng2-smart-table/lib/lib/data-set/data-set';
// import { activityModule } from './activity.module';

// @Component({
//   selector: 'app-activity-list',
//   templateUrl: './activity-list.component.html',
//   styleUrls: ['./activity-list.component.scss'],
// })
// export class ActivityListComponent implements OnInit {
//   listActivity: Activity[] = [];
//     data: any;

//   constructor(
//     private activityService: PostService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.loadActivities();

//     this.route.queryParams.subscribe((params) => {
//       if (params['refresh']) {
//         this.loadActivities();
//       }
//     });
//   }

//   loadActivities() {
 
//     this.activityService.getAllActivity().subscribe((activities) => {
//       this.listActivity = activities;
//     });
//   }
// }
