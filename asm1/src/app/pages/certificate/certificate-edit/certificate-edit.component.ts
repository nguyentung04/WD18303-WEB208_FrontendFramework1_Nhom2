import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { certificate } from 'app/@core/interfaces/pages/certificate';
import { PostService } from 'app/@core/services/apis/post.service';


@Component({
  selector: 'app-certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.scss']
})
export class CertificateEditComponent {
  constructor(private router: Router, private user: PostService, private formedit: ActivatedRoute) { }

  table: string = 'certificate';

  certificateList: certificate[] = [];

  validForm: FormGroup;

  filename = '';
  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {

    this.getByID(this.id);


    this.validForm = new FormGroup({
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      nameReceiver: new FormControl('', Validators.required),
      dateRange: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
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

    const UpdateCer: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      nameReceiver: this.validForm.value.nameReceiver,
      dateRange: this.validForm.value.dateRange,
      expiry: this.validForm.value.expiry,
      image: this.filename,
    };

    this.user.putCer(UpdateCer, this.id).subscribe(res => {
      UpdateCer.id = res.id;
      // this.UserState.Users('update', [UpdateUser], this.table);
      this.router.navigate(['/pages/userinfo']);
    });
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.user.getById(ID, this.table).subscribe(data => {
      console.log(data);
      this.certificateList = data[0];
    })
  }

  back() {
    this.router.navigate(['/pages/userinfo']);
  }
}
