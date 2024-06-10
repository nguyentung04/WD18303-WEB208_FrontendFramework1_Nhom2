import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';

import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateLanguageComponent {
  constructor(
    private router: Router,
    private language: PostService,
  
  ) {}

  table: string = 'language';
  table1: string = 'userinfo';

  languageList: Ilanguage[] = [];
  list: IuserInfo[] = [];

  validForm: FormGroup;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
    this.getName();
  }
  getName() {
    this.language.getAllUser(this.table1).subscribe((data) => {
      this.list = data;
      console.log(data);
    });
  }

  onSubmit() {
    const newLanguage: Ilanguage = {
      id: '',
      user_id: this.validForm.value.user_id,
      language: this.validForm.value.language,
      level: this.validForm.value.level,
    };

    this.language.postLanguage(newLanguage, this.table).subscribe((res) => {
      this.languageList.push(newLanguage);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pages/inlanguage']);
      }); 
    });
  }

  back() {
    this.router.navigate(['/pages/inlanguage']);
  }
}
