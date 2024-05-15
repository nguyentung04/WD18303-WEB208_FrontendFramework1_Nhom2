import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { SmartTableData } from 'app/@core/data/experience';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./experience.component.scss'],
  templateUrl: './experience.component.html',
})
export class experienceComponent implements OnInit {
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

}