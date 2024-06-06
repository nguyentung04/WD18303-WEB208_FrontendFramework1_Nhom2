import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruitment-create',
  templateUrl: './recruitment-create.component.html',
  styleUrls: ['./recruitment-create.component.scss']
})
export class RecruitmentCreateComponent {
  constructor(private router:Router){}

  back() {
    this.router.navigate(['/pages/userinfo'])
  }
}
