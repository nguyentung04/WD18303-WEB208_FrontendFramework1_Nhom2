import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { PostService2 } from 'app/@core/services/apis/post.services';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateEducationComponent {
  list: IuserInfo[] = [];
  table: string = 'education';
  users: any[] = []; 
  lists: any[] = [];

  validForm: FormGroup;

  constructor(private router: Router, private postService: PostService2) { }

  ngOnInit(): void {
    this.postService.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });
    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      specialized: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      graduation_Type: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required) // Thêm trường user_id vào FormGroup
    });
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const newEducation: Ieducation = {
      id: 0, // ID sẽ được tạo bởi server
      name: this.validForm.value.name,
      specialized: this.validForm.value.specialized,
      startTime: this.validForm.value.startTime,
      endTime: this.validForm.value.endTime,
      graduation_Type: this.validForm.value.graduation_Type,
      user_id: this.validForm.value.user_id // Lấy giá trị user_id từ form
    };

    this.postService.postEducation(newEducation, this.table).subscribe(res => {
      this.lists.push(newEducation);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/education']);
      });   
    });
  }

  back() {
    this.router.navigate(['/pages/education']);
  }
}
