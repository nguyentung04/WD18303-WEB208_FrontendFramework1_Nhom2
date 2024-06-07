import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditActivityComponent implements OnInit {
  [x: string]: any;
  myForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}
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
      console.log('Form Submit!', this.myForm.value);
      
    } else {
      this.validatorAllFormFields(this.myForm);
    }
  }

  validatorAllFormFields( formGroup: FormGroup): void {
    // lấy tất cả các khóa trong formGoup.Controls
    Object.keys(formGroup.controls).forEach((fiedl) => {
      // lấy điều khiển tương ứng với tên điều khiển
      const control = formGroup.get(fiedl);
      // kiểm tra nếu diều khiển là một formConntrol
      if (control instanceof FormControl) {
        // đánh dấu điều khiẻn nnayf đã chạm
        control.markAsTouched({onlySelf: true});
      } 
      // nếu điều khiển là một formGroup
      else if (control instanceof FormGroup){
        this.validatorAllFormFields(control);
      } 
    })
  }

  back(): void {
    this.router.navigate(['/pages/activity']);
  }
}
