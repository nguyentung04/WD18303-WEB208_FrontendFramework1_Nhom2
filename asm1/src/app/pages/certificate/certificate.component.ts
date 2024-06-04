import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

// import { certificateData } from 'app/@core/data/certificate-table';
import { Router } from '@angular/router';
interface certificate {
  id: any,
  nameCertificate: string;
  issued: string;
  nameReceiver: string;
  dateRange: string;
  expiry: string;
  image: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
})
export class certificateComponent implements OnInit {
  ngOnInit(): void {}

 certificate: certificate[] = [
    {
      id:1,
      nameCertificate: 'Thạc sĩ',
      issued: 'FPT PolyTechnic',
      nameReceiver: 'Nguyen Van C',
      dateRange: '20/3/2022',
      expiry: '3 năm',
      image: 'assets/images/anh1.webp',
    },
   
   
  ];

  constructor() {}
}
