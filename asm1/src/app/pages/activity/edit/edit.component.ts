import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditActivityComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/activity'])
  }
}
