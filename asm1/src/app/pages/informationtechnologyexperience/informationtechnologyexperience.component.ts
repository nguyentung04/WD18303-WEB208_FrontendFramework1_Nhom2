import { Component, OnInit } from '@angular/core';
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

}