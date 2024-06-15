import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes(
          '/informationtechnologyexperience/'
        );
      }
    });
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
=======
import { LocalDataSource } from 'ng2-smart-table';


import { informationtechnologyexperienceTableData } from 'app/@core/data/informationtechnologyexperience-table';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./informationtechnologyexperience.component.scss'],
  templateUrl: './informationtechnologyexperience.component.html',
})
export class informationtechnologyexperienceComponent implements OnInit {
  ngOnInit(): void { }

  informationtechnologyexperience = {
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
      software: {
        title: 'Phần mềm',
        type: 'string',
      },
      level: {
        title: 'Trình độ',
        type: 'string',
      }

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: informationtechnologyexperienceTableData) {
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