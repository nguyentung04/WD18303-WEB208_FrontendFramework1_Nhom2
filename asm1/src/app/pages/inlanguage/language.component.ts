import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { LevelStateService } from './load';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { LaexService } from 'app/@core/services/apis/laex.service';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./language.component.scss'],
  templateUrl: './language.component.html',
})
export class languageComponent implements OnInit {
  showRouterOutlet: boolean = false;

  languageList: Ilanguage[] = [];
  listUser: IuserInfo[]=[];

  table: string = 'language';
  table1: string = 'userinfo';

  constructor(private router: Router, private inlanguage: LaexService, private levelState: LevelStateService) {
  }
  ngOnInit(): void {
  
    this.getAll();
    this.getName();

    this.levelState.users.subscribe(({ action, data }) => {
      if (action === 'add') {
        this.languageList.push(...data as Ilanguage[]);
      } else if (action === 'update') {
        this.getAll();
      }
    });

  }
  getAll() {
    this.inlanguage.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.languageList = data;
    })
  }
  getName() {
    this.inlanguage.getAllUser(this.table1).subscribe((data) => {
      this.listUser = data;
      console.log(data);
    });
  }
  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.inlanguage.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }
  

  add() {
    this.router.navigate(['/pages/inlanguage/create'])
  }
  edit(id:number) {
    this.router.navigate([`/pages/inlanguage/edit/${id}`])
  }





}

