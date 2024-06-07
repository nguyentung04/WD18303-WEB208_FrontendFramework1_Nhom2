import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateActivityComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
      content_description: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.postService.postActivity(this.myForm.value, 'activity').subscribe(
        (response) => {
          console.log('Form Submitted!', response);
          this.router.navigate(['/pages/activity']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.validateAllFormFields(this.myForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  back(): void {
    this.router.navigate(['/pages/activity']);
  }
}
