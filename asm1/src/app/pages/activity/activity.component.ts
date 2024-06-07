import { Component, OnInit } from '@angular/core';
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

}