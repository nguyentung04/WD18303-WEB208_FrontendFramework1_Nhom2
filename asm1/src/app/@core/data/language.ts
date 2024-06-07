
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, fullname: 'Huỳnh Như', language:'Trung Quốc', level:'HSK2' },
      { id: 2, fullname: 'Huỳnh Tuyết Nhi', language:'Tiếng Anh', level:'ielts9.0' },

    ];
  }
}

