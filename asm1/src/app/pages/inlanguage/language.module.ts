import { NgModule } from '@angular/core';
import { languageComponent } from './language.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateLanguageComponent } from './create/create.component';
import { EditLanguageComponent } from './edit/edit.component';
import { DeleteLanguageComponent } from './delete/delete.component';



@NgModule({
  imports: [
    BreadcrumbModule,
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
  ],
})
export class languageModule { }
