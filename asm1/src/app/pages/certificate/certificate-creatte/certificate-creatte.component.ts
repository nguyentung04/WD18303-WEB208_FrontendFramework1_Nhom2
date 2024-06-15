import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { certificate } from 'app/@core/interfaces/pages/certificate';
<<<<<<< HEAD
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { CertificateService } from 'app/@core/services/apis/certificate';
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

@Component({
  selector: 'app-certificate-creatte',
  templateUrl: './certificate-creatte.component.html',
  styleUrls: ['./certificate-creatte.component.scss']
})
export class CertificateCreatteComponent implements OnInit {
  table: string = 'certificate';
  certificateList: certificate[] = [];
  validForm: FormGroup;
<<<<<<< HEAD

  filename = '';
  userinfoList: IuserInfo[] = [];
  table1: string = 'userinfo';
  constructor(private router: Router, private certificate: CertificateService) { }

  ngOnInit(): void {

    this.validForm = new FormGroup({
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
  
    });
    this.getAll();
  }


  getAll() {
    this.certificate.getAllUser(this.table1).subscribe(data => {
      console.log(data);
      this.userinfoList = data;
    })
  }
 

  onSubmit() {
    if (this.validForm.invalid) {
=======
  filename = '';

  constructor(private router: Router, private certificate: PostService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      nameReceiver: new FormControl('', Validators.required),
      dateRange: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.filename = file.name;
      const formData = new FormData();
      formData.append("img", file);
      const upload = this.certificate.uploadImg(formData, this.table);
      upload.subscribe(res => {
        console.log('up ảnh thành công', res);
      }, error => {
        console.error('Lỗi upload ảnh', error);
      });
    }
  }

  onSubmit() {
    if (this.validForm.invalid || this.filename) {
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
      return;
    }

    const newCertificate: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
<<<<<<< HEAD
      user_id: this.validForm.value.user_id,
      expiry: this.validForm.value.expiry,
    
=======
      nameReceiver: this.validForm.value.nameReceiver,
      dateRange: this.validForm.value.dateRange,
      expiry: this.validForm.value.expiry,
      image: this.filename,
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    };

    this.certificate.postCer(newCertificate, this.table).subscribe(res => {
      newCertificate.id = res.id;
<<<<<<< HEAD
      this.certificateList.push(newCertificate);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/certificate']);
      });
    });
   
}
  
=======
      this.router.navigate(['/pages/certificate']);
    }, error => {
      console.error('Lỗi thêm chứng chỉ', error);
    });
  }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

  back() {
    this.router.navigate(['/pages/certificate']);
  }
}
