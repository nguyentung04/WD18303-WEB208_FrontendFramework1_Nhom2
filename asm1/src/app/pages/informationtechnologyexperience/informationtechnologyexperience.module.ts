import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience.component';
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
=======
    NbCardModule
  ],
  declarations: [
    informationtechnologyexperienceComponent
  ],
})
export class informationtechnologyexperienceModule { }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
