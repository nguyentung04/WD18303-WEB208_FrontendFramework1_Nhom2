import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
 // Đặt tên theo PascalCase
import { usersComponent } from '../users/users.component'; // Đặt tên theo PascalCase
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CreateUsersComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
     
      usersComponent, 
      CreateUsersComponent,
      EditComponent,
      DeleteComponent,
    ],
  })
export class usersModule { }