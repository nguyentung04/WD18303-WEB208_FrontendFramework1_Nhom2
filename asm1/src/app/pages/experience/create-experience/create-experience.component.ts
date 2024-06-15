import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { PostService } from 'app/@core/services/apis/post.service';


@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.scss']
})
export class CreateExperienceComponent {
  constructor(private router: Router, private experience: PostService) { }

  table: string = 'experience';
  table1:string='userinfo'

  experienceList: IExperience[] = [];
  
  list: IuserInfo[]=[];

  validForm: FormGroup;


  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('',Validators.required),
      company: new FormControl('', Validators.required),
      vacancies: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      describe: new FormControl('', Validators.required),
    });
    this.getName();
  }
  getName(){
    this.experience.getAllUser(this.table1).subscribe( data => {
      this.list = data;
      console.log(data);   
    });

  }


  onSubmit() {
    const newExperience: IExperience = {
      id: '',
      user_id:this.validForm.value.user_id,
      company: this.validForm.value.company,
      vacancies: this.validForm.value.vacancies,
      startdate: this.validForm.value.startdate,
      enddate: this.validForm.value.enddate,
      describe: this.validForm.value.describe,
    };

    const startdate = new Date(this.validForm.value.startdate); 
    const enddate = new Date(this.validForm.value.enddate); 
    if (startdate > enddate) {
      this.validForm.controls['startdate'].setErrors({ maxYear: true });
      return console.log('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      ;
    } 

    this.experience.postExperience(newExperience, this.table).subscribe(res => {
      newExperience.id = res.id;
      this.router.navigate(['/pages/experience']);
    });
  }


  back() {
    this.router.navigate(['/pages/experience']);
  }
}



