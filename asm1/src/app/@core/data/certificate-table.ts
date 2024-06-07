
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class certificateData {
  constructor() { }
  getData(): any[] {
    return [
      { id: 1, nameCertificate: 'Thạc sĩ', issued: 'FPT PolyTechnic', nameReceiver: 'Nguyen Van C', dateRange: '20/3/2022', expiry: '3 năm', image: 'assets/images/anh1.webp' },
      { id: 2, nameCertificate: 'Thạc sĩ', issued: 'FPT PolyTechnic', nameReceiver: 'Nguyen Van C', dateRange: '20/3/2022', expiry: '3 năm', image: 'assets/images/anh1.webp' },
    ];
  }
  
}