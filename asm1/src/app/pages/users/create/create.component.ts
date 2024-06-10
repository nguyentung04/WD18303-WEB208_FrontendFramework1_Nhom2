import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { PostService2 } from 'app/@core/services/apis/post.services';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateUsersComponent implements OnInit {
  constructor(private router: Router, private userService: PostService2) { }

  table: string = 'login';

  validForm: FormGroup;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role_id: new FormControl('', Validators.required),
      date_start: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newUser: Iusers = {
      id: 0, // ID sẽ được tạo bởi server
      name: this.validForm.value.name,
      email: this.validForm.value.email,
      role_id: this.validForm.value.role_id,
      date_start: this.validForm.value.date_start,
      password: this.validForm.value.password,
    };

    this.userService.postUsers(newUser, this.table).subscribe(res => {
      this.router.navigate(['/pages/users']);
    });
  }

  back() {
    this.router.navigate(['/pages/users']);
  }

  
}