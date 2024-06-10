import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { certificate } from 'app/@core/interfaces/pages/certificate';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-certificate-creatte',
  templateUrl: './certificate-creatte.component.html',
  styleUrls: ['./certificate-creatte.component.scss']
})
export class CertificateCreatteComponent implements OnInit {
  table: string = 'certificate';
  certificateList: certificate[] = [];
  validForm: FormGroup;

  filename = '';
  userinfoList: IuserInfo[] = [];
  table1: string = 'userinfo';
  constructor(private router: Router, private certificate: PostService) { }

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
      return;
    }

    const newCertificate: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      user_id: this.validForm.value.user_id,
      expiry: this.validForm.value.expiry,
    
    };

    this.certificate.postCer(newCertificate, this.table).subscribe(res => {
      newCertificate.id = res.id;
      this.certificateList.push(newCertificate);
      this.router.navigate(['/pages/certificate']);
      });
  }

  back() {
    this.router.navigate(['/pages/certificate']);
  }
}
