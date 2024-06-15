import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { UserInfoService } from 'app/@core/services/apis/userinfo.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent1 {
  constructor(private router: Router, private user: UserInfoService, private formedit: ActivatedRoute, private datePipe: DatePipe) { }

  table: string = 'userinfo';

  list: IuserInfo[] = [];
  validForm: FormGroup;

  filename = '';

  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {

    this.getByID(this.id);

    this.validForm = new FormGroup({
      img: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)
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
      return console.log('Năm sinh phải lớn hơn 2003!');
    }

    const UpdateUser: IuserInfo = {
      id: '',
      img: this.filename,
      fullname: this.validForm.value.fullname,
      birthday: this.validForm.value.birthday,
      address: this.validForm.value.address,
      email: this.validForm.value.email,
      phone: this.validForm.value.phone,
    };

    this.user.putUser(UpdateUser, this.id, this.table).subscribe(res => {

      this.router.navigate(['/pages/userinfo']);
    });
  }

  getByID(id: string): void {
    const ID = parseInt(id, 10);
    this.user.getById(ID, this.table).subscribe(data => {
      this.list = data[0];

    })
  }
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  back() {
    this.router.navigate(['/pages/userinfo']);
  }
}
