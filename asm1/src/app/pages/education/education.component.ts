import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { SmartTableData } from 'app/@core/data/smar-table-education';




@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./education.component.scss'],
  templateUrl: './education.component.html',
})
export class educationComponent implements OnInit {
  ngOnInit(): void { }

  education = {
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
      nameSchool: {
        title: 'Tên trường',
        type: 'string',
      },
      specialized: {
        title: 'Chuyên ngành học',
        type: 'string',
      },
      startTime: {
        title: 'Ngày bắt đầu',
        type: 'string',
      },
      endTime: {
        title: 'Ngày kết thúc',
        type: 'string',
      },
      graduationType: {
        title: 'Loại tốt nghiệp',
        type: 'string',
      },
      describe: {
        title: 'Mô tả',
        type: 'number',
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

