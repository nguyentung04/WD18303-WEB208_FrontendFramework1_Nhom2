import { NgModule } from '@angular/core';
import { activityComponent } from './activity.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

import { RouterModule } from '@angular/router';
import { CreateActivityComponent } from './create/create.component';
import { DeleteActivityComponent } from './delete/delete.component';
import { EditActivityComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    RouterModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule, 

  ],
  declarations: [
    activityComponent,
    CreateActivityComponent,
    DeleteActivityComponent,
    EditActivityComponent,
  ],
})
export class activityModule {}
