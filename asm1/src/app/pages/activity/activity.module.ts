import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ActivityComponent } from './activity.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityDeleteComponent } from './activity-delete/activity-delete.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { activityComponent } from './activity.component';
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
    ActivityComponent,
    ActivityCreateComponent,
    ActivityEditComponent,
    ActivityDeleteComponent
  ],
})
export class activityModule { }
=======
    NbCardModule
  ],
  declarations: [
    activityComponent
  ],
})
export class activityModule { }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
