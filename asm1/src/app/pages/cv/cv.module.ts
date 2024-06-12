import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CvComponent } from './cv.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { CvdetailComponent } from './cvdetail/cvdetail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CvComponent,
    CvdetailComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ]
})
export class CvModule { }
