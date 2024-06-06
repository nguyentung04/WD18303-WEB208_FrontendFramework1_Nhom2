import { PostService } from './../../../@core/services/apis/post.service'; // Assuming the path is correct
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recruitment } from 'app/@core/interfaces/pages/recruitment'; // Update interface path

@Component({
  selector: 'app-recruitment-creatte',
  templateUrl: './recruitment-create.component.html',
  styleUrls: ['./recruitment-create.component.scss']
})
export class RecruitmentCreateComponent implements OnInit {
  table: string = 'recruitment';
  recruitmentList: recruitment[] = []; 
  validForm: FormGroup;
  filename = '';

  constructor(private router: Router, private recruitment: PostService) { } // Update service name if needed

  ngOnInit(): void {
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
      return;
    }

    const newRecruitment: recruitment = {
      id: '',
      nameRecruitment: this.validForm.value.nameRecruitment,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      nameExaminer: this.validForm.value.nameExaminer,
      result: this.validForm.value.result,
     
    };

    this.recruitment.postRe(newRecruitment, this.table).subscribe(res => { 
      newRecruitment.id = res.id;
      this.router.navigate(['/pages/recruitment']); 
    }, error => {
      console.error('Lỗi thêm tuyển dụng', error); 
    });
  }

  back() {
    this.router.navigate(['/pages/recruitment']); 
  }
}
