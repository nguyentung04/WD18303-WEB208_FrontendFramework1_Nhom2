import { PostService } from './../../../@core/services/apis/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
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
  onSubmit() {
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
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/pages/activity']);
          });
      });
  }

  back() {
    this.router.navigate(['/pages/activity']);
  }
}
