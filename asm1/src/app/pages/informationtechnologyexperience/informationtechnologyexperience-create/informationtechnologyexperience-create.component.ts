import { PostService } from './../../../@core/services/apis/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'app-informationtechnologyexperience-create',
  templateUrl: './informationtechnologyexperience-create.component.html',
  styleUrls: ['./informationtechnologyexperience-create.component.scss'],
})
export class InformationtechnologyexperienceCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private informationtechnologyexperienceService: PostService
  ) {}

  table: string = 'informationtechnologyexperience';
  table1: string = 'userinfo';
  list: IuserInfo[] = [];
  validForm: FormGroup;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      software: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
    this.getAll();
  }
  getAll() {
    this.informationtechnologyexperienceService
      .getAllUser(this.table1)
      .subscribe((data) => {
        console.log(data);
        this.list = data;
      });
  }
  onSubmit() {
    const newInformationtechnologyexperience: Informationtechnologyexperience =
      {
        id: '',
        user_id: this.validForm.value.user_id,
        software: this.validForm.value.software,
        level: this.validForm.value.level,
      };

    this.informationtechnologyexperienceService
      .postInformationtechnologyexperience(
        newInformationtechnologyexperience,
        this.table
      )
      .subscribe((res) => {
        newInformationtechnologyexperience.id = res.id;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/pages/informationtechnologyexperience']);
          });
      });
  }

  back() {
    this.router.navigate(['/pages/informationtechnologyexperience']);
  }
}