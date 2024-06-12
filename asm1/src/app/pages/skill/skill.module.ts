import { NgModule } from '@angular/core';
import { SkillComponent } from './skill.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';



@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
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
  ],
})
export class skillModule { }
