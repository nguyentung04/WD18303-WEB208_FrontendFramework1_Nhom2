import { NgModule } from '@angular/core';
import { certificateComponent } from './certificate-add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule
  ],
  declarations: [
    certificateComponent
  ],
})
export class certificateModule { }
