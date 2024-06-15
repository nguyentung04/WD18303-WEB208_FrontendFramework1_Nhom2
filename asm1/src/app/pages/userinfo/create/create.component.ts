import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';

import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private router: Router, private user: PostService) { }

  table: string = 'userinfo';

  userinfoList: IuserInfo[] = [];

  validForm: FormGroup;

  filename = '';

  ngOnInit(): void {
    this.validForm = new FormGroup({
      img: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [ Validators.required,Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)
      ]),
    });
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {
      this.filename = file.name;

      const formData = new FormData();

      formData.append("img", file);
      const upload = this.user.uploadImg(formData, this.table)
      upload.subscribe(res => {
        console.log('up ảnh thành công', res);
      });
    }
  }

  onSubmit() {
    if (this.validForm.invalid || !this.filename) {
      return
    };

    const birthday = new Date(this.validForm.value.birthday);
    if (birthday.getFullYear() > 2003) {
      this.validForm.controls['birthday'].setErrors({ maxYear: true });
      return;
    }

    const newUser: IuserInfo = {
      id: '',
      img: this.filename,
      fullname: this.validForm.value.fullname,
      birthday: this.validForm.value.birthday,
      address: this.validForm.value.address,
      email: this.validForm.value.email,
      phone: this.validForm.value.phone,
    };

    this.user.postUser(newUser, this.table).subscribe(res => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/userinfo']);
      });
    });
  }

  back() {
    this.router.navigate(['/pages/userinfo']);
  }
}
