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
  constructor(private router: Router, private certificate: PostService, private formedit: ActivatedRoute) { }

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
      expiry: new FormControl('', Validators.required),
     
    });
  }


  onSubmit() {
    if (this.validForm.invalid) {
      return
    };

    const UpdateCer: certificate = {
      id: '',
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      nameReceiver: this.validForm.value.nameReceiver,
      expiry: this.validForm.value.expiry,
    
    };

    this.certificate.putCer(UpdateCer, this.id).subscribe(res => {
      UpdateCer.id = res.id;
      // this.UserState.Users('update', [UpdateUser], this.table);
      this.router.navigate(['/pages/certificate']);
    });
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.certificate.getById(ID, this.table).subscribe(data => {
      console.log(data);
      const certificateData = data[0]; // Assuming the certificate data is returned as an array with one element
      this.validForm.patchValue({
        nameCertificate: certificateData.nameCertificate,
        issued: certificateData.issued,
        nameReceiver: certificateData.nameReceiver,
        expiry: certificateData.expiry
      });
    })
  }
  

  back() {
    this.router.navigate(['/pages/certificate']);
  }
}
