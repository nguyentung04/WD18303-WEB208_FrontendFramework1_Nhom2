import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'app/@core/interfaces/pages/activity';
import { PostService } from 'app/@core/services/apis/post.service';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit {
  [x: string]: any;
  activity: Activity; //Sử dụng một đối tượng Hoạt động duy nhất
  id: string;
  table: string = 'activity';
  table1: string = 'userinfo';
  list: IuserInfo[] = [];
  validForm: FormGroup;

  constructor(
    private router: Router,
    private activityService: PostService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.activatedRoute.snapshot.params.id; //Đảm bảo ID là một số
  }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      content_description: new FormControl('', Validators.required),
    });

    this.getByID(this.id);
  }

  getByID(id: string): void {
    const ID = parseInt(id, 10); //Đảm bảo cơ sở được chỉ định cho  parseInt
    console.log(`Đang tìm nạp chứng chỉ có ID: ${ID}`); // Ghi lại ID đang được tìm nạp

    this.activityService.getById(ID, this.table).subscribe(
      (data) => {
        console.log('API response:', data); //Ghi lại phản hồi API đầy đủ
        this.list = data[0];
        // if (data) {
        //   this.listActivity = [data]; //Gói dữ liệu trong một mảng để phù hợp với loại dự kiến

        //   if (this.validForm) {
        //     this.validForm.patchValue({
        //       user_id: data.user_id,
        //       role: data.role,
        //       start_time: data.start_time,
        //       end_time: data.end_time,
        //       content_description: data.content_description,
        //     });
        //   }

        //   this.cdr.detectChanges(); //Phát hiện thay đổi kích hoạt theo cách thủ công
        // } else {
        //   console.warn('No certificate data found.');
        // }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
  onSubmit() {
    if (this.validForm.dirty) {
        // Nếu có sự thay đổi trong form
        const UpdateActivity: Activity = {
            id: '',
            user_id: this.validForm.value.user_id,
            role: this.validForm.value.role,
            start_time: this.validForm.value.start_time,
            end_time: this.validForm.value.end_time,
            content_description: this.validForm.value.content_description,
        };

        console.log('Submitting form:', UpdateActivity);

        const numericId = parseInt(this.id, 10);

        this.activityService.putActivity(UpdateActivity, numericId, this.table)
            .subscribe((res) => {
                UpdateActivity.id = res.id;
                console.log('Update response:', res);

                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => {
                        this.router.navigate(['/pages/activity']);
                    });
            });
    } else {
        // Nếu không có sự thay đổi trong form
        console.log('No changes in the form data.');
    }
}

  back() {
    this.router.navigate(['/pages/activity']);
  }
}