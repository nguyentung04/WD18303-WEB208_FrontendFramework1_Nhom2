import { PostService } from './../../../@core/services/apis/post.service'; // Assuming the path is correct
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recruitment } from 'app/@core/interfaces/pages/recruitment'; // Update interface path
<<<<<<< HEAD
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { RecruitmenttService } from 'app/@core/services/apis/recruitment';
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

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
<<<<<<< HEAD
  userinfoList: IuserInfo[] = [];
  table1: string = 'userinfo';
  constructor(private router: Router, private recruitment: RecruitmenttService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
    
      result: new FormControl('', Validators.required),
    });
    this.getAll();


    
  }


  getAll() {
    this.recruitment.getAllUser(this.table1).subscribe(data => {
      console.log(data);
      this.userinfoList = data;
    })
=======

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
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  }

 

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newRecruitment: recruitment = {
      id: '',
<<<<<<< HEAD
      user_id: this.validForm.value.user_id,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      result: this.validForm.value.result,
=======
      nameRecruitment: this.validForm.value.nameRecruitment,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      nameExaminer: this.validForm.value.nameExaminer,
      result: this.validForm.value.result,
     
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    };

    this.recruitment.postRe(newRecruitment, this.table).subscribe(res => { 
      newRecruitment.id = res.id;
<<<<<<< HEAD
      this.recruitmentList.push(newRecruitment);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/recruitment']);
      });
    });
   
}
   
=======
      this.router.navigate(['/pages/recruitment']); 
    }, error => {
      console.error('Lỗi thêm tuyển dụng', error); 
    });
  }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

  back() {
    this.router.navigate(['/pages/recruitment']); 
  }
}
