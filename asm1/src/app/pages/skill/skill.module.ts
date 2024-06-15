import { NgModule } from '@angular/core';
import { SkillComponent } from './skill.component';
<<<<<<< HEAD
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';

=======
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
<<<<<<< HEAD
    NbCardModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    SkillComponent,
    CreateSkillComponent,
    EditSkillComponent,
    CreateSkillComponent,
    EditSkillComponent
=======
    NbCardModule
  ],
  declarations: [
    SkillComponent
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
})
export class skillModule { }
