
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, fullname: 'nhi', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 2, fullname: 'nhi2', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 3, fullname: 'như', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhu@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 4, fullname: 'nhi', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 5, fullname: 'nhi2', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 6, fullname: 'như', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhu@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 7, fullname: 'nhi', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 8, fullname: 'nhi2', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 9, fullname: 'như', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhu@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 10, fullname: 'nhi', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 11, fullname: 'nhi2', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhi@example.com', phone: 123454678, img: 'assets/images/1.jpg' },
      { id: 12, fullname: 'như', birthday: '1/1/2023', address: 'Cần thơ', email: 'nhu@example.com', phone: 123454678, img: 'assets/images/1.jpg' },


    ];
  }
}

