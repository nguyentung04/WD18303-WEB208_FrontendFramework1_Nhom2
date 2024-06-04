import { NgModule } from '@angular/core';
import { recruitmentComponent } from './recruitment.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    CommonModule,
    NbCardModule
  ],
  declarations: [
    recruitmentComponent,
    EditComponent,
    CreateComponent,
    DeleteComponent
  ],
})
export class recruitmentModule { }
