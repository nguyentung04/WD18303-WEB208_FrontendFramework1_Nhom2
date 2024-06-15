import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { userComponent } from './user.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CreateComponent } from './create/create.component';
import { EditComponent1 } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    userComponent,
    CreateComponent,
    EditComponent1,
    DeleteComponent,
    PaginatorComponent

  ],
})
export class userModule { }
