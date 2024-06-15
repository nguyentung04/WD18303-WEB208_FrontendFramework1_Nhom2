import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { educationComponent } from './education.component';
import { CreateEducationComponent } from './create/create.component';
import { EditEducationComponent } from './edit/edit.component';
import { DeleteEducationComponent } from './delete/delete.component';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
=======
import { educationComponent } from './education.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


@NgModule({
    imports: [
<<<<<<< HEAD
      BreadcrumbModule,
      Ng2SmartTableModule,
      NbCardModule,
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule 

    ],
    declarations: [
        educationComponent,
        CreateEducationComponent,
        EditEducationComponent,
        DeleteEducationComponent
    ],
})
export class educationModule { }
=======
        BreadcrumbModule,
        Ng2SmartTableModule,
        NbCardModule
    ],
    declarations: [
        educationComponent
    ],
})
export class educationModule { }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
