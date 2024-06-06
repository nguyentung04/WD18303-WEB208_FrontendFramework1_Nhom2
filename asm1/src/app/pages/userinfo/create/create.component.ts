import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/userinfo'])
  }
}