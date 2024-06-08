import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { PostService } from 'app/@core/services/apis/post.service';
;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private user: PostService) { }

  table: string = 'login';
  validForm: FormGroup;
  userData: Iusers; // Biến để lưu trữ dữ liệu người dùng hiện tại
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getByID(this.id);
    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role_id: new FormControl('', Validators.required),
      // date_start: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const updatedUser: Iusers = {
      id: this.id,
      name: this.validForm.value.name,
      email: this.validForm.value.email,
      role_id: this.validForm.value.role_id,
      // date_start: this.validForm.value.date_start,
      password: this.validForm.value.password,
    };

    this.user.putUsers(updatedUser, this.id, this.table).subscribe(res => {
      this.router.navigate(['/pages/users']);
    });
  }

  getByID(id: number) {
    this.user.getById(id, this.table).subscribe(data => {
      this.userData = data[0]; 
      this.populateForm(this.userData); 
      console.log('Old user data:', this.userData);
    });
  }

  populateForm(user: Iusers) {
    // Chuyển đổi chuỗi ngày thành kiểu Date
    // const date_start = new Date(user.date_start);
  
    // Sử dụng patchValue để chỉ cập nhật các trường cần thiết
    this.validForm.patchValue({
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      // date_start: date_start.toISOString().substring(0, 10), // Chuyển đổi lại thành chuỗi ngày ("YYYY-MM-DD")
      password: user.password
    });
  }
  
  back() {
    this.router.navigate(['/pages/users']);
  }
}