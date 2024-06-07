import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { certificate } from 'app/@core/interfaces/pages/certificate';

@Component({
  selector: 'app-certificate-creatte',
  templateUrl: './certificate-creatte.component.html',
  styleUrls: ['./certificate-creatte.component.scss']
})
export class CertificateCreatteComponent implements OnInit {
  table: string = 'certificate';
  certificateList: certificate[] = [];
  validForm: FormGroup;


  constructor(private router: Router, private certificate: PostService) { }

  ngOnInit(): void {

    this.validForm = new FormGroup({
      nameCertificate: new FormControl('', Validators.required),
      issued: new FormControl('', Validators.required),
      nameReceiver: new FormControl('', Validators.required),
     
      expiry: new FormControl('', Validators.required),
  
    });
  }

 

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newCertificate: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      nameReceiver: this.validForm.value.nameReceiver,
    
      expiry: this.validForm.value.expiry,
    
    };

    this.certificate.postCer(newCertificate, this.table).subscribe(res => {
      newCertificate.id = res.id;
      this.router.navigate(['/pages/certificate']);
      }, error => {
        console.error('Lỗi thêm tuyển dụng', error); 
      }
    );
  }

  back() {
    this.router.navigate(['/pages/certificate']);
  }
}
