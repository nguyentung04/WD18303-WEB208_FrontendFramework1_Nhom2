import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { PostService } from 'app/@core/services/apis/post.service';
import { LevelStateService } from 'app/pages/inlanguage/load';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent {
  constructor(private router: Router, private experience: PostService, private levelState: LevelStateService, private formedit: ActivatedRoute) { }

  table: string = 'exprience';

  list: IExperience[] = [];

  validForm: FormGroup;
  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {

    this.getByID(this.id);


    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      vacancies: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      describe: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    if (this.validForm.invalid) {
      return
    };

    const UpdateEx: IExperience = {
      id: '',
      name: this.validForm.value.name,
      company: this.validForm.value.company,
      vacancies: this.validForm.value.vacancies,
      startdate: this.validForm.value.startdate,
      enddate: this.validForm.value.enddate,
      describe: this.validForm.value.describe,
    };

    this.experience.putExperience(UpdateEx, this.id, this.table).subscribe(res => {
      UpdateEx.id = res.id;
      this.levelState.Users('update', [UpdateEx], this.table);
      this.router.navigate(['/pages/experience']);
    });
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.experience.getById(ID, this.table).subscribe(data => {
      console.log(data);
      this.list = data[0];
    })
  }

  back() {
    this.router.navigate(['/pages/experience']);
  }
}



