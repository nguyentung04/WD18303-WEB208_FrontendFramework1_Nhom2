
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

import { environment } from '@environments/environment';

import { IuserInfo } from './../../@core/interfaces/pages/userinfo';
import { UserInfoService } from 'app/@core/services/apis/userinfo.service';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class userComponent implements OnInit {
  showRouterOutlet: boolean = false;

  userinfoList: IuserInfo[] = [];

  table: string = 'userinfo';
  //phân trang
  lisdata: any;
  lastpage: number = 0;
  current_page: number = 1;
  apiUrl = `${environment.apiBaseUrl}/${this.table}`;


  constructor(private router: Router, private UserInfo:UserInfoService) {
  }

  ngOnInit() {
    this.getAll();

  }
  getPage(res: any) {
    console.log(res);

  }

  getAll() {
    this.UserInfo.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.userinfoList = data;
    })
  }

  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.UserInfo.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }


  add() {
    this.router.navigate(['/pages/userinfo/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/userinfo/edit/${id}`])
  }
  //export ra file excel

  exportToExcel(skills: any[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(skills);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, 'userinfo');
  }

  private saveExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  //
  exportUserinfo() {
    this.exportToExcel(this.userinfoList);
  }

  

}