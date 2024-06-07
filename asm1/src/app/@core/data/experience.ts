
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, fullname: 'Huỳnh Tuyết Nhi', namecompany: 'ABC', location: 'Quản Lý', createdate: '03/04/2022', enddate: '05/06/2024',describe:'Quản lý công việc của từng nhân viên' },
      { id: 2, fullname: 'Huỳnh Như', namecompany: 'XYZ', location: 'Quản Lý', createdate: '03/04/2022', enddate: '05/06/2024',describe:'Quản lý công việc của từng nhân viên' },
     

    ];
  }
}

