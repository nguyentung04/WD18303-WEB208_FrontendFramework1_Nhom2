import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { certificate } from 'app/@core/interfaces/pages/certificate';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'app-certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.scss']
})
export class CertificateEditComponent implements OnInit {
  table: string = 'certificate';
  certificateList: certificate[] = [];
  validForm: FormGroup;
  id: string;

  constructor(
    private router: Router,
    private certificateService: PostService,
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

  onSubmit(): void {
    if (this.validForm.invalid) {
      return;
    }

    const updateCertificate: certificate = {
      id: this.id,
      user_id: this.validForm.value.user_id,
      nameCertificate: this.validForm.value.nameCertificate,
      issued: this.validForm.value.issued,
      expiry: this.validForm.value.expiry,
    };

    console.log('Submitting form:', updateCertificate);

    const numericId = parseInt(this.id, 10);

    this.certificateService.putCer(updateCertificate, numericId, this.table).subscribe(
      res => {
        updateCertificate.id = res.id;
        console.log('Update response:', res);

        this.router.navigate(['/pages/certificate']);

      },
      error => {
        console.error('Error updating certificate', error);
      }
    );
  }

  getByID(id: string): void {
    const ID = parseInt(id, 10);
    console.log(`Fetching certificate with ID: ${ID}`);

    this.certificateService.getById(ID, this.table).subscribe(
      data => {
        console.log('API response:', data);

        this.certificateList = data[0];
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  back(): void {
    this.router.navigate(['/pages/certificate']);
  }
}
