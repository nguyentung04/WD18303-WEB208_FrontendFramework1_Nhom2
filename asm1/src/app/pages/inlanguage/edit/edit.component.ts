import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { PostService } from 'app/@core/services/apis/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditLanguageComponent implements OnInit {
  table: string = 'language';
  list: Ilanguage[] = [];
  validForm: FormGroup;

  id = this.languageRoute.snapshot.params.id;

  constructor(
    private router: Router,
    private languageService: PostService,
    private languageRoute: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.getByID(this.id);
    
    this.validForm = new FormGroup({
      language: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });

   
  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const updateLa: Ilanguage = {
      id: '',
      user_id: this.validForm.value.user_id,
      language: this.validForm.value.language,
      level: this.validForm.value.level,
    };

    this.languageService.putLanguage(updateLa,this.id, this.table).subscribe((res) => { 
       
            this.router.navigate(['/pages/inlanguage']);
       
      },
      (error) => {
        console.error('Error updating language', error);
      }
    );
  }

  getByID(id: string) {
    const ID = parseInt(id);
    this.languageService.getById(ID, this.table).subscribe(data => {
      console.log(data); 
      this.list = data[0];
    });
  }

  back() {
    this.router.navigate(['/pages/inlanguage']);
  }
}
