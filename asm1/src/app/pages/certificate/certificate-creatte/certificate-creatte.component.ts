import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { certificate } from 'app/@core/interfaces/pages/certificate';


@Component({
  selector: 'app-certificate-creatte',
  templateUrl: './certificate-creatte.component.html',
  styleUrls: ['./certificate-creatte.component.scss']
})
export class CertificateCreatteComponent {
  constructor(private router: Router, private certificate: PostService) { }

  table: string = 'certificate';

  certificateList: certificate[] = [];

  validForm: FormGroup;

  filename = '';

  ngOnInit(): void {
    this.validForm = new FormGroup({
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      nameReceiver: new FormControl('', Validators.required),
      dateRange: new FormControl('', [Validators.required, Validators.email]),
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
      const upload = this.certificate.uploadImg(formData, this.table)
      upload.subscribe(res => {
        console.log('up ảnh thành công', res);
      });
    }
  }

  onSubmit() {
    if (this.validForm.invalid || !this.filename) {
      return
    };

    const newCertificate: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      nameReceiver: this.validForm.value.nameReceiver,
      dateRange: this.validForm.value.dateRange,
      expiry: this.validForm.value.expiry,
      image: this.filename,
    };

    this.certificate.postCer(newCertificate, this.table).subscribe(res => {
      newCertificate.id = res.id;
      // this.UserState.Users([newUser], this.table);
      this.router.navigate(['/pages/certificate']);
    });
  }

  back() {
    this.router.navigate(['/pages/certificate']);
  }
}
