import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { PostService2 } from 'app/@core/services/apis/post.services';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditEducationComponent implements OnInit {
  list: IuserInfo[] = [];
  table: string = 'education';
  validForm: FormGroup;
  educationData: Ieducation;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService2) { }

  ngOnInit(): void {
    this.postService.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });
    this.id = this.route.snapshot.params['id'];

    this.getByID(this.id);
    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      specialized: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      graduation_Type: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
    }, { validators: this.endDateAfterStartDate });
  }

  endDateAfterStartDate(group: AbstractControl): ValidationErrors | null {
    const start = group.get('startTime')?.value;
    const end = group.get('endTime')?.value;
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      if (endDate <= startDate) {
        group.get('endTime')?.setErrors({ endDateBeforeOrEqualStart: true });
        return { endDateBeforeOrEqualStart: true };
      } else {
        group.get('endTime')?.setErrors(null);
      }
    }
    return null;
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const updatedEducation: Ieducation = {
      id: this.id,
      name: this.validForm.value.name,
      specialized: this.validForm.value.specialized,
      startTime: this.validForm.value.startTime,
      endTime: this.validForm.value.endTime,
      graduation_Type: this.validForm.value.graduation_Type,
      user_id: this.validForm.value.user_id,
    };

    this.postService.putEducation(updatedEducation, this.id, this.table).subscribe(res => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/education']);
      });
    });
  }

  getByID(id: number) {
    this.postService.getByID(id, 'education').subscribe(data => {
      this.educationData = data[0];
      this.populateForm(this.educationData);
    });
  }

  populateForm(education: Ieducation) {
    const startTime = new Date(education.startTime);
    const endTime = new Date(education.endTime);

    this.validForm.patchValue({
      name: education.name,
      specialized: education.specialized,
      startTime: startTime.toISOString().substring(0, 10),
      endTime: endTime.toISOString().substring(0, 10),
      graduation_Type: education.graduation_Type,
      user_id: education.user_id
    });
  }

  back() {
    this.router.navigate(['/pages/education']);
  }
}
