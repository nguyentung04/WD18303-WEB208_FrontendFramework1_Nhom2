import { NgModule } from '@angular/core';
import { certificateComponent } from './certificate.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CertificateCreatteComponent } from './certificate-creatte/certificate-creatte.component';
import { CertificateEditComponent } from './certificate-edit/certificate-edit.component';
import { CertificateDeleteComponent } from './certificate-delete/certificate-delete.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule
=======
    ReactiveFormsModule
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
  declarations: [
    certificateComponent,
    CertificateCreatteComponent,
    CertificateEditComponent,
    CertificateDeleteComponent,
   
  ],
})
export class certificateModule { }
