import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { PostService } from 'app/@core/services/apis/post.service';


@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss'],
})
export class EditExperienceComponent implements OnInit {
  table: string = 'experience';

  experienceList: IExperience[] = [];

  
  validForm: FormGroup;

  id = this.experienceRoute.snapshot.params.id;

  constructor(
    private router: Router,
    private experienceService: PostService,
    private experienceRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.validForm = new FormGroup({
      company: new FormControl('', Validators.required),
      vacancies: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      describe: new FormControl('', Validators.required),
    });

    this.getByID(this.id);

  }

  onSubmit() {
    if (this.validForm.invalid) {
      return;
    }

    const updateEx: IExperience = {
      id:'',
      user_id: this.validForm.value.user_id,
      company: this.validForm.value.company,
      vacancies: this.validForm.value.vacancies,
      startdate: this.validForm.value.startdate,
      enddate: this.validForm.value.enddate,
      describe: this.validForm.value.describe,
    };

    console.log('Submitting form:', updateEx);

    this.experienceService
      .putExperience(updateEx, this.id, this.table).subscribe(
        (res) => {
          console.log('Update response:', res); // Log the response from the API
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/pages/experience']);
            });
        },
        (error) => {
          console.error('Error updating experience', error); // Log any error
        }
      );
  }

  getByID(id: string) {
    const ID = parseInt(id); 
    this.experienceService.getById(ID, this.table).subscribe(
      (data) => {
        this.experienceList = data[0];
        console.log('API response:', data);
        this.validForm.patchValue({
          company: data.company,
          vacancies: data.vacancies,
          startdate: data.startdate,
          enddate: data.enddate,
          describe: data.describe
        }); 
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  back(): void {
    this.router.navigate(['/pages/experience']);
  }
}
