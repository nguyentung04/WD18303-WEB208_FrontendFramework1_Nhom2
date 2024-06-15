import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { PostService } from 'app/@core/services/apis/post.service';
import { Iskill } from 'app/@core/interfaces/pages/skill';


@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent {
  constructor(private router: Router, private user: PostService) { }

  table: string = 'skill';
  table1: string = 'userinfo';

  lists: Iskill[] = [];

  list: IuserInfo[] = [];


  validForm: FormGroup;


  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      skill: new FormControl('', Validators.required),
    });
    this.getName();

  }

  getName() {
    this.user.getAllUser(this.table1).subscribe(data => {
      this.list = data;
      console.log(data);
    })
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return
    };

    const newUser: Iskill = {
      id: '',
      user_id: this.validForm.value.user_id,
      skill: this.validForm.value.skill,
    };

    this.user.postSkill(newUser, this.table).subscribe(res => {
      this.lists.push(newUser);
        this.router.navigate(['/pages/skill']);  
    });
  }

  back() {
    this.router.navigate(['/pages/skill']);
  }
}
