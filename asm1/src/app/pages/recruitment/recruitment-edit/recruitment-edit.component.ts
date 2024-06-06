import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'app-recruitment-edit',
  templateUrl: './recruitment-edit.component.html',
  styleUrls: ['./recruitment-edit.component.scss']
})
export class RecruitmentEditComponent {
  constructor(private router: Router, private user: PostService,  private formedit: ActivatedRoute) { }

  table: string = 'recruitment';

  recruitmentList: recruitment[] = [];

  validForm: FormGroup;

  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {

    this.getByID(this.id);


    this.validForm = new FormGroup({
      nameRecruitment: new FormControl('', Validators.required), // Consider renaming to "name"
      role: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      nameExaminer: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return
    };

    const UpdateRecruitment: recruitment = {
      id: '',
      nameRecruitment: this.validForm.value.nameRecruitment,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      nameExaminer: this.validForm.value.nameExaminer,
      result: this.validForm.value.result,
    };

    this.user.putRe(UpdateRecruitment, this.id).subscribe(res => {
      UpdateRecruitment.id = res.id;
   
      this.router.navigate(['/pages/recruitment']);
    });
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.user.getById(ID, this.table).subscribe(data => {
      console.log(data);
      this.recruitmentList = data[0];
    })
  }

  back() {
    this.router.navigate(['/pages/recruitment']);
  }
}
