import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { PostService2 } from 'app/@core/services/apis/post.services';

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
      password: this.validForm.value.password
    };

    this.userService.postUsers(newUser, this.table).subscribe(res => {
      this.lists.push(newUser);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/users']);
      });   
    });
  }

  back(): void {
    this.router.navigate(['/pages/users']);
  }
}