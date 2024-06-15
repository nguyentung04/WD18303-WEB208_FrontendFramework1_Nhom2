import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
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
    this.activityService.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.listActivity = data;
    });
  }

  deleteActivity(id: string) {
    const Id = parseInt(id, 10);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.activityService.deleteUser(this.table, Id).subscribe(() => {
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
=======
import { LocalDataSource } from 'ng2-smart-table';


import { informationtechnologyexperienceTableData } from 'app/@core/data/informationtechnologyexperience-table';
import { activityTableData } from 'app/@core/data/activity';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
})
export class activityComponent implements OnInit {
  ngOnInit(): void { }

  activity = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      fullname: {
        title: 'Họ tên',
        type: 'string',
      },
      role: {
        title: 'Vai trò',
        type: 'string',
      },
      start_and_end_times: {
        title: 'Thời gain bắt đầu và kết thúc',
        type: 'date',
      },
      describe: {
        title: 'Mô tả',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: activityTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Bạn chắc chắn muốn xóa?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
}