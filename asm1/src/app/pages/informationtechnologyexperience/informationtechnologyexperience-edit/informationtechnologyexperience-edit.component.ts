import { PostService } from './../../../@core/services/apis/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Component({
  selector: 'app-informationtechnologyexperience-edit',
  templateUrl: './informationtechnologyexperience-edit.component.html',
  styleUrls: ['./informationtechnologyexperience-edit.component.scss'],
})
export class InformationtechnologyexperienceEditComponent {
  constructor(
    private router: Router,
    private informationtechnologyexperienceService: PostService,
    private formedit: ActivatedRoute
  ) {}
  [x: string]: any;
  table: string = 'informationtechnologyexperience';

  validForm: FormGroup;
  listInformationtechnologyexperience: Informationtechnologyexperience[] = [];

  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {
    this.validForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      software: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const newInformationtechnologyexperience: Informationtechnologyexperience =
      {
        id: '',
        full_name: this.validForm.value.full_name,
        software: this.validForm.value.software,
        level: this.validForm.value.level,
      };

    this.informationtechnologyexperienceService
      .putInformationtechnologyexperience(
        newInformationtechnologyexperience,this.id,
        this.table
      )
      .subscribe((res) => {
        newInformationtechnologyexperience.id = res.id;
        this.router.navigate(['/pages/informationtechnologyexperience'], {
          state: { refresh: true },
        });
      });
  }
  getByID(id: string) {
    const Id = parseInt(id);
    this.informationtechnologyexperienceService.getById(Id, this.table).subscribe((data) => {
      console.log(data);
      this.listInformationtechnologyexperience = data[0];
    });
  }

  back() {
    this.router.navigate(['/pages/informationtechnologyexperience']);
  }
}
