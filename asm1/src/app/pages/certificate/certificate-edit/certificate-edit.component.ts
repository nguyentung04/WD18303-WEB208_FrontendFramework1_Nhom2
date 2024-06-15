<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { certificate } from 'app/@core/interfaces/pages/certificate';
import { PostService } from 'app/@core/services/apis/post.service';
import { CertificateService } from 'app/@core/services/apis/certificate';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { certificate } from 'app/@core/interfaces/pages/certificate';
import { PostService } from 'app/@core/services/apis/post.service';

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

@Component({
  selector: 'app-certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.scss']
})
<<<<<<< HEAD
export class CertificateEditComponent implements OnInit {
  table: string = 'certificate';
  certificateList: certificate;
  validForm: FormGroup;
  id: string;
  originalData: any;

  constructor(
    private router: Router,
    private certificateService: CertificateService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
    });

    this.getByID(this.id);
  }

  getByID(id: string): void {
    const ID = parseInt(id, 10); // Đảm bảo ID là số nguyên
    console.log(`Đang lấy chứng chỉ với ID: ${ID}`); // Ghi nhật ký ID đang lấy

    this.certificateService.getById(ID, this.table).subscribe(
      data => {
        console.log('Phản hồi từ API:', data); // Ghi nhật ký phản hồi từ API

        this.certificateList = data[0];
        this.originalData = { ...data[0] }; // Lưu trữ dữ liệu gốc

  
      },
    
    );
  }

  isUnchanged(): boolean {
    const formValues = this.validForm.getRawValue();
    return (
      formValues.user_id === this.originalData.user_id &&
      formValues.nameCertificate === this.originalData.nameCertificate &&
      formValues.issued === this.originalData.issued &&
      formValues.expiry === this.originalData.expiry
    );
  }

  onSubmit(): void {
    if (this.validForm.invalid || this.isUnchanged()) {
      alert('Dữ liệu không thay đổi hoặc form không hợp lệ.');
      return;
    }

    const updateCertificate: certificate = {
      id: this.id,
      user_id: this.validForm.value.user_id,
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      expiry: this.validForm.value.expiry,
    };

    console.log('Đang gửi form:', updateCertificate);

    const numericId = parseInt(this.id, 10); // Chuyển đổi this.id thành số

    this.certificateService.putCer(updateCertificate, numericId, this.table).subscribe(
      res => {
        updateCertificate.id = res.id;
        console.log('Phản hồi khi cập nhật:', res); // Ghi nhật ký phản hồi từ API
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/pages/certificate']);
        });
      },
      error => {
        console.error('Lỗi khi cập nhật chứng chỉ', error); // Ghi nhật ký lỗi
      }
    );
  }

  back(): void {
    this.router.navigate(['/pages/certificate']);
=======
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
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  }
}
