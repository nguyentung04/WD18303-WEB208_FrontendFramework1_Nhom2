import { NgModule } from '@angular/core';
import { languageComponent } from './language.component';
import {BreadcrumbModule} from "xng-breadcrumb";
<<<<<<< HEAD
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateLanguageComponent } from './create/create.component';
import { EditLanguageComponent } from './edit/edit.component';
import { DeleteLanguageComponent } from './delete/delete.component';

=======
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


@NgModule({
  imports: [
    BreadcrumbModule,
<<<<<<< HEAD
    NbCardModule,
   Ng2SmartTableModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    languageComponent,
    CreateLanguageComponent,
    EditLanguageComponent,
    DeleteLanguageComponent
=======
    Ng2SmartTableModule,
    NbCardModule
  ],
  declarations: [
    languageComponent
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
})
export class languageModule { }
