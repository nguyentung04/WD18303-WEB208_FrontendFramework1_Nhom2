import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { PostService } from 'app/@core/services/apis/post.service';
import { LevelStateService } from '../load';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditLanguageComponent {
  constructor(private router: Router, private language: PostService, private levelState: LevelStateService, private formedit: ActivatedRoute) { }

  table: string = 'language';

  list: Ilanguage[] = [];

  validForm: FormGroup;

  id = this.formedit.snapshot.params.id;

  ngOnInit(): void {

    this.getByID(this.id);


    this.validForm = new FormGroup({
      name: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    if (this.validForm.invalid) {
      return
    };

    const UpdateLa: Ilanguage = {
      id: '',
      name: this.validForm.value.name,
      language: this.validForm.value.language,
      level: this.validForm.value.level,
    };

    this.language.putLanguage(UpdateLa, this.id, this.table).subscribe(res => {
      UpdateLa.id = res.id;
      this.levelState.Users('update', [UpdateLa], this.table);
      this.router.navigate(['/pages/inlaguage']);
    });
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.language.getById(ID, this.table).subscribe(data => {
      console.log(data);
      this.list = data[0];
    })
  }

  back() {
    this.router.navigate(['/pages/inlaguage']);
  }
}

