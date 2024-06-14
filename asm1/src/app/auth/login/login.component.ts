import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from "../../@theme/components/spinner/spinner.service";
import { AuthService } from "../../@core/services/apis";
import { LocalStorageService } from "../../@core/services/common";
import { LOCALSTORAGE_KEY, ROUTER_CONFIG } from "../../@core/config";
import { IAlertMessage } from "../../@theme/components/alert/ngx-alerts.component";
import { PostService2 } from '../../@core/services/apis/post.services';
import { Iusers } from "app/@core/interfaces/pages/users";
import { finalize } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs'; 

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alertMessages: IAlertMessage[] = [];

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private auth: AuthService,
    private storageService: LocalStorageService,
    private postService: PostService2
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.spinner.show();
      const { email, password } = this.loginForm.value;

      const delayTime = 2000;
      this.postService.getAllUser('login').pipe(
        delay(delayTime),
        finalize(() => {
          this.spinner.hide();
        })
      ).subscribe((users: Iusers[]) => {
        const user = users.find(user => user.email === email);

        if (user) {
          
          bcrypt.compare(password, user.password, (err, result) => {
            if (result && user.role_id === 2) { 
              this.handleLoginSuccess(user); 
            } else {
              this.handleLoginFailed();
            }
          });
        } else {
          this.handleLoginFailed();
        }
      });
    }
  }

  protected handleLoginSuccess(user: Iusers) {
    
    this.storageService.setItem(LOCALSTORAGE_KEY.userInfo, user.email);
    this.storageService.setItem(LOCALSTORAGE_KEY.token, 'dummy-token');
    this.router.navigate([ROUTER_CONFIG.pages]).then();
    this.spinner.hide();
  }

  protected handleLoginFailed() {
    this.spinner.hide();
    this.alertMessages = [{ status: 'danger', message: 'Tài khoản hoặc mật khẩu không chính xác hoặc không phải là Admin' }];
  }
}
