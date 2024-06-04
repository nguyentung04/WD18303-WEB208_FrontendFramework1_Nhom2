import { NgModule } from '@angular/core';
import { certificateComponent } from './certificate.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule
  ],
  declarations: [
    certificateComponent,
    DeleteComponent,
    CreateComponent,
    EditComponent
  ],
})
export class certificateModule { }
