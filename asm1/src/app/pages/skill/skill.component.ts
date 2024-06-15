import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

import { UserInfoService } from 'app/@core/services/apis/userinfo.service';
import { Iskill } from 'app/@core/interfaces/pages/skill';
import { environment } from '@environments/environment';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
  showRouterOutlet: boolean = false;

  lists: Iskill[] = [];
  listuser: IuserInfo ;

  table: string = 'skill';
  table1: string = 'userinfo';

  id = this.formedit.snapshot.params.id;
  //phân trang

  last_page: number = 0;
  current_page: number = 1;
  apiUrl = `${environment.apiBaseUrl}/${this.table}`;


  constructor(private router: Router, private skills: UserInfoService, private formedit: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAll();
    this.getName();
  }
  getName() {
    this.skills.getAllUser(this.table1).subscribe(data => {
      this.listuser = data;
      console.log(data);
    })
  }

  getAll() {
    this.skills.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }
  getPage(res: any) {
    console.log(res);

  }

  delete(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.skills.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }

  add() {
    this.router.navigate(['/pages/skill/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/skill/edit/${id}`])
  }
  //export ra file excel

  exportToExcel(skills: any[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(skills);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, 'skills');
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
  exportSkill() {
    this.exportToExcel(this.lists);
  }
}
