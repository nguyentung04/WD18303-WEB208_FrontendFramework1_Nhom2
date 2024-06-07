import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/@core/services/apis/post.service';
import { Iskill } from 'app/@core/interfaces/pages/skill';
import { UserStateService } from '../userinfo/load';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
  showRouterOutlet: boolean = false;

  lists: Iskill[] = [];

  table: string = 'skill';
  id = this.formedit.snapshot.params.id;

  constructor(private router: Router, private skills: PostService, private UserState: UserStateService,private formedit: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/skill/');
      }
    });
    this.getAll();
    this.UserState.users.subscribe(({ action, data }) => {
      if (action === 'add') {
        this.lists.push(...data as Iskill[]);
      } else if (action === 'update') {
        this.getAll();
      }
    });
  }

  getAll() {
    this.skills.getAllUser( this.table).subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }

  add() {
    this.router.navigate(['/pages/skill/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/skill/edit/${id}`])
  }
}
