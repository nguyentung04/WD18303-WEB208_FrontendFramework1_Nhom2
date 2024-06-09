import { PostService } from './../../../@core/services/apis/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';


@Component({
  selector: 'app-informationtechnologyexperience-create',
  templateUrl: './informationtechnologyexperience-create.component.html',
  styleUrls: ['./informationtechnologyexperience-create.component.scss'],
})
export class InformationtechnologyexperienceCreateComponent {
  constructor(private router: Router, private informationtechnologyexperienceService: PostService) {}

  table: string = 'informationtechnologyexperience';

  validForm: FormGroup;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const newInformationtechnologyexperience: Informationtechnologyexperience = {
      id: '',
      full_name: this.validForm.value.full_name,
      software: this.validForm.value.software,
      level: this.validForm.value.level,
      
    };

    this.informationtechnologyexperienceService
      .postInformationtechnologyexperience(newInformationtechnologyexperience, this.table)
      .subscribe((res) => {
        newInformationtechnologyexperience.id = res.id;
        this.router.navigate(['/pages/informationtechnologyexperience'], { state: { refresh: true } });
      });
  }

  back() {
    this.router.navigate(['/pages/informationtechnologyexperience']);
  }
}
