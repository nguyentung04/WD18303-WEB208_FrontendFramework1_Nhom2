import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { RecruitmenttService } from 'app/@core/services/apis/recruitment';

@Component({
  selector: 'app-recruitment-edit',
  templateUrl: './recruitment-edit.component.html',
  styleUrls: ['./recruitment-edit.component.scss'],
})
export class RecruitmentEditComponent implements OnInit {
  table: string = 'recruitment';
  recruitmentList: recruitment;
  validForm: FormGroup;
  id: string;
  originalData: any;

  constructor(
    private router: Router,
    private recruitmentService: RecruitmenttService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });

    this.getById(this.id);
  }

  getById(id: string): void {
    const ID = parseInt(id, 10);
    console.log(`Fetching recruitment with ID: ${ID}`);
    
    this.recruitmentService.getById(ID, this.table).subscribe(
      data => {
        this.recruitmentList = data[0];
        this.originalData = { ...data[0] };
      },
    
    );
  }

  isUnchanged(): boolean {
    const formValues = this.validForm.getRawValue();
    return (
      formValues.user_id === this.originalData.user_id &&
      formValues.role === this.originalData.role &&
      formValues.status === this.originalData.status &&
      formValues.rate === this.originalData.rate &&
      formValues.result === this.originalData.result
    );
  }

  onSubmit(): void {
    if (this.validForm.invalid || this.isUnchanged()) {
      return;
    }

    const updateRecruitment: recruitment = {
      id: this.id,
      user_id: this.validForm.value.user_id,
      role: this.validForm.value.role,
      status: this.validForm.value.status,
      rate: this.validForm.value.rate,
      result: this.validForm.value.result,
    };

    console.log('Submitting form:', updateRecruitment);

    const numericId = parseInt(this.id, 10);

    this.recruitmentService.putRe(updateRecruitment, numericId, this.table).subscribe(
      res => {
        updateRecruitment.id = res.id;
        console.log('Update response:', res); // Log the response from the API      
          this.router.navigate(['/pages/recruitment']);
      },
      error => {
        console.error('Error updating recruitment', error);
      }
    );
  }

  back(): void {
    this.router.navigate(['/pages/recruitment']);
  }
}
