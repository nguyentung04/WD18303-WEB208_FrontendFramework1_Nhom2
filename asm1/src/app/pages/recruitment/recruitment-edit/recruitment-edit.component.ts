import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../../@core/services/apis/post.service';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';

@Component({
  selector: 'app-recruitment-edit',
  templateUrl: './recruitment-edit.component.html',
  styleUrls: ['./recruitment-edit.component.scss']
})
export class RecruitmentEditComponent implements OnInit {

  table: string = 'recruitment';
  recruitmentList: recruitment[]=[];
  validForm: FormGroup;
  id: string;

  constructor(private router: Router,
              private recruitmentService: PostService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;

    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });

    this.getById(this.id);
  }



  onSubmit() {
    if (this.validForm.invalid) {
      // Cung cấp phản hồi cho người dùng nếu biểu mẫu không hợp lệ
      return;
    }

    const updateRecruitment: recruitment = {
      id: '',
      user_id: this.validForm.value.user_id,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      result: this.validForm.value.result,
    };

    this.recruitmentService.putRe(updateRecruitment, parseInt(this.id, 10), this.table).subscribe(
      res => {
        // Xử lý thành công, có thể hiển thị một tin nhắn thành công
        this.router.navigate(['/pages/recruitment']);
      },
      error => {
        // Xử lý lỗi, hiển thị một tin nhắn lỗi
      }
    );
  }

  getById(id: string): void {
    const ID = parseInt(id, 10);
    console.log(`Fetching recruitment with ID: ${ID}`); // Log the ID being fetched
    this.recruitmentService.getById(ID, this.table).subscribe(
      data => {
        console.log('API response:', data); // Log the full API response
  
        if (data) {
          this.recruitmentList = [data]; // Wrap data in an array to match the expected type
  
          if (this.validForm) {
            this.validForm.patchValue({
              user_id: data. user_id,
        role: data. role,
        status: data. status,
        rate: data. rate,
        result: data. result,
            });
          }
        } else {
          console.warn('No recruitment data found.');
        }
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  
  }




  back() {
    this.router.navigate(['/pages/recruitment']);
  }
}
