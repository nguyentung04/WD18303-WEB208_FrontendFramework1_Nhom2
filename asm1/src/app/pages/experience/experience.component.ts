import { Component, OnInit } from '@angular/core';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { Router } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';
import { LevelStateService } from '../inlanguage/load';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./experience.component.scss'],
  templateUrl: './experience.component.html',
})
export class experienceComponent implements OnInit {
  showRouterOutlet: boolean = false;

  experienceList: IExperience[] = [];

  table: string = '	experience';

  constructor(private router: Router, private experience: PostService, private levelState: LevelStateService) {
  }
  ngOnInit(): void {
    
    this.getAll();

 

  }
  getAll() {
    this.experience.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.experienceList = data;
    })
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