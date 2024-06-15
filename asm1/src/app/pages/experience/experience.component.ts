import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { Router } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';
import { LevelStateService } from '../inlanguage/load';
import { NavigationEnd } from '@angular/router';
=======
import { LocalDataSource } from 'ng2-smart-table';


import { SmartTableData } from 'app/@core/data/experience';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./experience.component.scss'],
  templateUrl: './experience.component.html',
})
export class experienceComponent implements OnInit {
<<<<<<< HEAD
  showRouterOutlet: boolean = false;

  experienceList: IExperience[] = [];

  table: string = '	experience';

  constructor(private router: Router, private experience: PostService, private levelState: LevelStateService) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/experience/');
      }
    });
    this.getAll();

    this.levelState.users.subscribe(({ action, data }) => {
      if (action === 'add') {
        this.experienceList.push(...data as IExperience[]);
      } else if (action === 'update') {
        this.getAll();
      }
    });

  }
  getAll() {
    this.experience.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.experienceList = data;
    })
  }
  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.experience.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }
  

  add() {
    this.router.navigate(['/pages/experience/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/experience/edit/${id}`])
  }
=======
  ngOnInit(): void { }

  experience = {
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
      namecompany: {
        title: 'Công ty',
        type: 'string',
      },
      location: {
        title: 'Vị trí',
        type: 'string',
      },
      createdate: {
        title: 'Bắt đầu',
        type: 'string',
      },
      enddate: {
        title: 'Kết thúc',
        type: 'string',
      },
      describe: {
        title: 'Mô tả',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
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