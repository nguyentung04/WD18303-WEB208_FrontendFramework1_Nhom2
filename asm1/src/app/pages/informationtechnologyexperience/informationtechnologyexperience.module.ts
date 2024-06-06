import { NgModule } from '@angular/core';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateInformationtechnologyexperienceComponent } from './create/create.component';
import { EditInformationtechnologyexperienceComponent } from './edit/edit.component';
import { DeleteInformationtechnologyexperienceComponent } from './delete/delete.component';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    informationtechnologyexperienceComponent,
    CreateInformationtechnologyexperienceComponent,
    EditInformationtechnologyexperienceComponent,
    DeleteInformationtechnologyexperienceComponent,

  ],
})
export class informationtechnologyexperienceModule { }
