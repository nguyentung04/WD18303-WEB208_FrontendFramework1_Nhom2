import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { PostService2 } from 'app/@core/services/apis/post.services';
import * as bcrypt from 'bcryptjs'; // Import bcrypt

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateUsersComponent implements OnInit {
  validForm: FormGroup;
  table: string = 'login';
  lists: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: PostService2
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.validForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required],
      date_start: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.validForm.invalid) {
      return;
    }
  
    const newUser: Iusers = {
      id: 0, // ID sẽ được tạo bởi server
      name: this.validForm.value.name,
      email: this.validForm.value.email,
      role_id: this.validForm.value.role_id,
      date_start: this.validForm.value.date_start,
      password: this.validForm.value.password // Không mã hóa mật khẩu từ phía client
    };
  
    // Gọi service để gửi request POST đến API để thêm người dùng mới
    this.userService.postUsers(newUser, this.table).subscribe(res => {
      // Thêm người dùng mới vào danh sách hiển thị
      this.lists.push(newUser);
      // Sau khi thêm thành công, điều hướng về trang danh sách users
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/users']);
      });
    });
  }
  

  back(): void {
    // Điều hướng quay lại trang danh sách users
    this.router.navigate(['/pages/users']);
  }
}
