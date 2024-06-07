import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.scss']
})
export class CreateExperienceComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/experience'])
  }

}
