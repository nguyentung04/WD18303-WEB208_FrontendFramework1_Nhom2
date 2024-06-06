import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateActivityComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/activity'])
  }
}
