
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recruitment } from 'app/@core/interfaces/pages/recruitment'; // Update interface path
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { RecruitmenttService } from 'app/@core/services/apis/recruitment';

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
  }

 

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newRecruitment: recruitment = {
      id: '',
      user_id: this.validForm.value.user_id,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      result: this.validForm.value.result,
    };

    this.recruitment.postRe(newRecruitment, this.table).subscribe(res => { 
      newRecruitment.id = res.id;
      this.recruitmentList.push(newRecruitment);   
        this.router.navigate(['/pages/recruitment']);
    });
   
}
   

  back() {
    this.router.navigate(['/pages/recruitment']); 
  }
}
