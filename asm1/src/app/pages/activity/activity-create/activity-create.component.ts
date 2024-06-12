


import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'app/@core/interfaces/pages/activity';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss']
})
export class ActivityCreateComponent implements OnInit {

  constructor(private router: Router, private activityService: PostService) { }

  table: string = 'activity';

  validForm: FormGroup;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      content_description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const newActivity: Activity = {
      id: '',
      full_name: this.validForm.value.full_name,
      role: this.validForm.value.role,
      start_time: this.validForm.value.start_time,
      end_time: this.validForm.value.end_time,
      content_description: this.validForm.value.content_description,
    };

  
    this.activityService.postActivity(newActivity, this.table).subscribe(res => {
      newActivity.id = res.id;
      this.router.navigate(['/pages/activity'], { state: { refresh: true } });
    });
  }
  

  back() {
    this.router.navigate(['/pages/activity']);
  }
}
