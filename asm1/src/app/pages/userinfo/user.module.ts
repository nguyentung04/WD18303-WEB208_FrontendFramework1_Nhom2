<<<<<<< HEAD

=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { userComponent } from './user.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CreateComponent } from './create/create.component';
<<<<<<< HEAD
import { EditComponent1 } from './edit/edit.component';
=======
import { EditComponent } from './edit/edit.component';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { DeleteComponent } from './delete/delete.component';



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
<<<<<<< HEAD
    EditComponent1,
=======
    EditComponent,
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    DeleteComponent,

  ],
})
export class userModule { }
<<<<<<< HEAD

=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
