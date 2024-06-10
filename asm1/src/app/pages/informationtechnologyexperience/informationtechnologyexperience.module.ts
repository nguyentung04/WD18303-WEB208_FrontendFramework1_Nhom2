import { NgModule } from '@angular/core';
import { InformationtechnologyexperienceComponent } from './informationtechnologyexperience.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { InformationtechnologyexperienceDeleteComponent } from './informationtechnologyexperience-delete/informationtechnologyexperience-delete.component';
import { InformationtechnologyexperienceCreateComponent } from './informationtechnologyexperience-create/informationtechnologyexperience-create.component';
import { InformationtechnologyexperienceEditComponent } from './informationtechnologyexperience-edit/informationtechnologyexperience-edit.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    InformationtechnologyexperienceComponent,
    InformationtechnologyexperienceDeleteComponent,
    InformationtechnologyexperienceCreateComponent,
    InformationtechnologyexperienceEditComponent
  ],
})
export class informationtechnologyexperienceModule { }
