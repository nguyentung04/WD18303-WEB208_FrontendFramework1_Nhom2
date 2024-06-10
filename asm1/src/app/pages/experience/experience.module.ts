import { NgModule } from '@angular/core';
import { experienceComponent } from './experience.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { DeleteExperienceComponent } from './delete-experience/delete-experience.component';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    experienceComponent,
    CreateExperienceComponent,
    EditExperienceComponent,
    DeleteExperienceComponent
  ],
})
export class experienceModule { }
