import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/@core/services/apis/post.service';
import { Iskill } from 'app/@core/interfaces/pages/skill';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
  showRouterOutlet: boolean = false;

  lists: Iskill[] = [];
  list: Iskill[] = [];

  table: string = 'skill';

  id = this.formedit.snapshot.params.id;

  constructor(private router: Router, private skills: PostService,  private formedit: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.skills.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }


  delete(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.skills.deleteUser(this.table,Id).subscribe(() => {
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
}
