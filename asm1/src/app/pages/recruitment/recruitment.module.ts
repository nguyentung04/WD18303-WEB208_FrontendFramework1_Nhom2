import { NgModule } from '@angular/core';
import { recruitmentComponent } from './recruitment.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { RecruitmentCreateComponent } from './recruitment-create/recruitment-create.component';
import { RecruitmentEditComponent } from './recruitment-edit/recruitment-edit.component';
import { RecruitmentDeleteComponent } from './recruitment-delete/recruitment-delete.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    recruitmentComponent,
    RecruitmentCreateComponent,
    RecruitmentEditComponent,
    RecruitmentDeleteComponent,
 
  ],
})
export class recruitmentModule { }
