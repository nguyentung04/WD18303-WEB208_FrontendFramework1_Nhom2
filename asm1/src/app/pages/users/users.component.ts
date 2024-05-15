import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { SmartTableData } from 'app/@core/data/smar-table-users'; 

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class usersComponent implements OnInit {
  ngOnInit(): void { }

  users = {
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
      name: {
        title: 'Tên đăng nhập',
        type: 'string',
      },
      email: {
        title: 'Email ',
        type: 'string',
      },
      role: {
        title: 'Phân quyền',
        type: 'string',
      },
      password: {
        title: 'Mật khẩu',
        type: 'string',
      },
      dateCreated: {
        title: 'Ngày tạo',
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

