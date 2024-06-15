import { NgModule } from '@angular/core';
import { experienceComponent } from './experience.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { DeleteExperienceComponent } from './delete-experience/delete-experience.component';
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
<<<<<<< HEAD
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
=======
    NbCardModule
  ],
  declarations: [
    experienceComponent
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
})
export class experienceModule { }
