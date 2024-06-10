import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { PostService2 } from 'app/@core/services/apis/post.services';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditEducationComponent implements OnInit {
  list: IuserInfo[] = [];
  table: string = 'education';
  validForm: FormGroup;
  educationData: Ieducation; // Biến để lưu trữ dữ liệu học vấn hiện tại
  id: number;
  
  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService2) { }

  ngOnInit(): void {
    // Lấy danh sách người dùng
    this.postService.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });

    // Lấy ID từ route
    this.id = this.route.snapshot.params['id'];
    
    // Lấy dữ liệu giáo dục hiện tại
    this.getByID(this.id);

    // Khởi tạo form
    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      specialized: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      graduation_Type: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const updatedEducation: Ieducation = {
      id: this.id,
      name: this.validForm.value.name,
      specialized: this.validForm.value.specialized,
      startTime: this.validForm.value.startTime,
      endTime: this.validForm.value.endTime,
      graduation_Type: this.validForm.value.graduation_Type,
      user_id: this.validForm.value.user_id,
    };

    // Gọi API để cập nhật dữ liệu
    this.postService.putEducation(updatedEducation, this.id, 'education').subscribe(res => {
      this.router.navigate(['/pages/education']);
    });
  }

  getByID(id: number) {
    this.postService.getByID(id, 'education').subscribe(data => {
      if (data && data.length > 0) {
        this.educationData = data[0];
        this.populateForm(this.educationData);
      } else {
        // Xử lý khi không có dữ liệu trả về
        console.error('Không tìm thấy dữ liệu học vấn');
      }
    }, error => {
      console.error('Lỗi khi lấy dữ liệu học vấn', error);
    });
  }

  populateForm(education: Ieducation) {
    if (!education) {
      console.error('Dữ liệu học vấn không hợp lệ');
      return;
    }

    const startTime = new Date(education.startTime);
    const endTime = new Date(education.endTime);

  
    this.validForm.patchValue({
      name: education.name,
      specialized: education.specialized,
      startTime: startTime.toISOString().substring(0, 10), 
      endTime: endTime.toISOString().substring(0, 10), 
      graduation_Type: education.graduation_Type,
      user_id: education.user_id 
    });
  }

  back() {
    this.router.navigate(['/pages/education']);
  }
}