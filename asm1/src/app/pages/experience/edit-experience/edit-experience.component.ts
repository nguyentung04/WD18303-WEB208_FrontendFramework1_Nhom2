import { DatePipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
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
    private datePipe:DatePipe
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
          console.log('Update response:', res); 
         
              this.router.navigate(['/pages/experience']);
           
        },
        (error) => {
          console.error('Error updating experience', error); 
        }
      );

  }
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  getByID(id: string) {
    const ID = parseInt(id); 
    this.experienceService.getById(ID, this.table).subscribe(
      (data) => {
        this.experienceList = data[0];
        console.log('API response:', data);
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
