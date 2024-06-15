import { Component, OnInit } from '@angular/core';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { Router } from '@angular/router';
import { LevelStateService } from '../inlanguage/load';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { LaexService } from 'app/@core/services/apis/laex.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./experience.component.scss'],
  templateUrl: './experience.component.html',
})
export class experienceComponent implements OnInit {
  showRouterOutlet: boolean = false;

  experienceList: IExperience[] = [];
  listUser: IuserInfo[]=[];

  table: string = '	experience';
  table1: string = 'userinfo';

  constructor(private router: Router, private experience: LaexService, private levelState: LevelStateService) {
  }
  ngOnInit(): void {
    
    this.getAll();
    this.getName();


  }
  getAll() {
    this.experience.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.experienceList = data;
    })
  }
  getName() {
    this.experience.getAllUser(this.table1).subscribe((data) => {
      this.listUser = data;
      console.log(data);
    });
  }
  deleteUser(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.experience.deleteUser(this.table, Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }
  add() {
    this.router.navigate(['/pages/experience/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/experience/edit/${id}`])
  }
}