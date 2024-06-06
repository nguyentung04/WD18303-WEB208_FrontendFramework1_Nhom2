import { NgModule } from '@angular/core';
import { activityComponent } from './activity.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateActivityComponent } from './create/create.component';
import { DeleteActivityComponent } from './delete/delete.component';
import { EditActivityComponent } from './edit/edit.component';

@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    activityComponent,
    CreateActivityComponent,
    DeleteActivityComponent,
    EditActivityComponent,
  ],
})
export class activityModule {}
