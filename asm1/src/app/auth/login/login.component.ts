import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../@theme/components/spinner/spinner.service';
import { AuthService } from '../../@core/services/apis';
import { LocalStorageService } from '../../@core/services/common';
import { LOCALSTORAGE_KEY, ROUTER_CONFIG } from '../../@core/config';
import { IAlertMessage } from '../../@theme/components/alert/ngx-alerts.component';
import { PostService } from '../../@core/services/apis/post.service';
import { Iusers } from 'app/@core/interfaces/pages/users';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alertMessages: IAlertMessage[] = [];
  loginData: Iusers[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private postService: PostService // Inject PostService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.getLoginData();
  }

  getLoginData() {
    this.postService.getAllUser('login').subscribe((data: Iusers[]) => {
      // Use postService instead of authService
      this.loginData = data;
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const adminUser = this.loginData.find(
        (user) =>
          user.email === email &&
          user.password === password &&
          user.role_id === 2
      );
      if (adminUser) {
        this.router.navigate(['/pages']);
      } else {
        this.authService.login(this.loginForm.value).subscribe({
          next: (res) => this.handleLoginSuccess(res),
          error: () => this.handleLoginFailed(),
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  protected handleLoginSuccess(res: any) {
    console.log(res);
    this.router.navigate(['/pages']);
  }

  protected handleLoginFailed() {
    console.log('Login failed');
    this.alertMessages = [
      { status: 'danger', message: 'Tài khoản hoặc mật khẩu không chính xác' },
    ];
  }
}
