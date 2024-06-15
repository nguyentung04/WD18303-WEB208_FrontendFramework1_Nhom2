import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavigationEnd, Router } from '@angular/router';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { PostService } from 'app/@core/services/apis/post.service';
import { LevelStateService } from './load';


=======
import { LocalDataSource } from 'ng2-smart-table';


import { SmartTableData } from 'app/@core/data/language';

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./language.component.scss'],
  templateUrl: './language.component.html',
})
export class languageComponent implements OnInit {
<<<<<<< HEAD
  showRouterOutlet: boolean = false;

  languageList: Ilanguage[] = [];

  table: string = 'language';

  constructor(private router: Router, private inlanguage: PostService, private levelState: LevelStateService) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/inlanguage/');
      }
    });
    this.getAll();

    this.levelState.users.subscribe(({ action, data }) => {
      if (action === 'add') {
        this.languageList.push(...data as Ilanguage[]);
      } else if (action === 'update') {
        this.getAll();
      }
    });

  }
  getAll() {
    this.inlanguage.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.languageList = data;
    })
  }
  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.inlanguage.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }
  

  add() {
    this.router.navigate(['/pages/inlanguage/create'])
  }
  edit(id:number) {
    this.router.navigate([`/pages/inlanguage/edit/${id}`])
  }





}

=======
  ngOnInit(): void { }

  language = {
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
      language: {
        title: 'Ngôn ngữ',
        type: 'string',
      },
      level: {
        title: 'Trình độ',
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

}
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
