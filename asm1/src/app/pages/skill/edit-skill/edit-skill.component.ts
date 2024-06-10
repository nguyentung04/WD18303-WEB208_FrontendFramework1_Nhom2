import { IuserInfo } from './../../../@core/interfaces/pages/userinfo';
import { Iskill } from './../../../@core/interfaces/pages/skill';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from 'app/@core/services/apis/post.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent {
  constructor(private router: Router, private user: PostService, private formedit: ActivatedRoute) { }

  list: Iskill[] = [];
  table: string = 'skill';

  validForm: FormGroup;

  id = this.formedit.snapshot.params.id;


  ngOnInit(): void {
    this.validForm = new FormGroup({

      skill: new FormControl('', Validators.required),
    });
    this.getById(this.id);

  }

  getById(id: string) {
    const ID = parseInt(id);
    this.user.getById(ID, this.table).subscribe(data => {
      this.list = data[0];
      console.log(data);
    })
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newSkill: Iskill = {
      id: '',
      user_id: this.validForm.value.user_id,
      skill: this.validForm.value.skill,
    };

    this.user.putSkill(newSkill, this.id,this.table).subscribe(res => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/skill']);
      }); 
    });
  }


  back() {
    this.router.navigate(['/pages/skill']);
  }
}
