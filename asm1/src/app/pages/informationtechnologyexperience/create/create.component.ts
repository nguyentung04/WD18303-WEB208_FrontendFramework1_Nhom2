import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateInformationtechnologyexperienceComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/informationtechnologyexperience'])
  }
}
