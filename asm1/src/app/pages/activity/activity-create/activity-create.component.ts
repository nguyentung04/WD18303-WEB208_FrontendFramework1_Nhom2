import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'app/@core/interfaces/pages/activity';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss'],
})
export class ActivityCreateComponent implements OnInit {
  constructor(private router: Router, private activityService: PostService) {}

  table: string = 'activity';
  table1: string = 'userinfo';
  listA: IuserInfo[] = [];

  validForm: FormGroup;
  submitted = false;
  currentDate: string;

  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', [Validators.required, this.dateValidator.bind(this)]),
      end_time: new FormControl('', [Validators.required, this.dateValidator.bind(this)]),
      content_description: new FormControl('', Validators.required),
    });
    this.getAll();
  }

  getAll() {
    this.activityService.getAllUser(this.table1).subscribe((data) => {
      console.log(data);
      this.listA = data;
    });
  }

  getCurrentDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //Tháng dựa trên số không
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  dateValidator(control: FormControl) {
    const selectedDate = new Date(control.value);
    const today = new Date(this.currentDate);
    today.setHours(0, 0, 0, 0); // Đảm bảo việc so sánh chỉ dành cho ngày chứ không phải thời gian
    if (selectedDate < today) {
      return { dateInvalid: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;

    if (this.validForm.invalid) {
      return;
    }

    const newActivity: Activity = {
      id: '',
      user_id: this.validForm.value.user_id,
      role: this.validForm.value.role,
      start_time: this.validForm.value.start_time,
      end_time: this.validForm.value.end_time,
      content_description: this.validForm.value.content_description,
    };

    this.activityService
      .postActivity(newActivity, this.table)
      .subscribe((res) => {
        newActivity.id = res.id;
        this.router.navigate(['/pages/activity']);
      });
  }

  back() {
    this.router.navigate(['/pages/activity']);
  }
}
