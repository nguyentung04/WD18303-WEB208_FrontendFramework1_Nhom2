import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'app/@core/interfaces/pages/activity';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent {
  [x: string]: any;
  listActivity: Activity[] = [];
  constructor(
    private router: Router,
    private activityService: PostService,
    private formedit: ActivatedRoute
  ) {}
  id = this.formedit.snapshot.params.id;
  table: string = 'activity';

  validForm: FormGroup;

  ngOnInit(): void {
    this.getByID(this.id);
    this.validForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      content_description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const UpdateActivity: Activity = {
      id: '',
      full_name: this.validForm.value.full_name,
      role: this.validForm.value.role,
      start_time: this.validForm.value.start_time,
      end_time: this.validForm.value.end_time,
      content_description: this.validForm.value.content_description,
    };

    this.activityService
      .putActivity(UpdateActivity, this.id, this.table)
      .subscribe((res) => {
        UpdateActivity.id = res.id;
        this.router.navigate(['/pages/activity']);
      });
  }

  getByID(id: string) {
    const Id = parseInt(id);
    this.activityService.getById(Id, this.table).subscribe((data) => {
      console.log(data);
      this.listActivity = data[0];
    });
  }

  back() {
    this.router.navigate(['/pages/activity']);
  }
}
