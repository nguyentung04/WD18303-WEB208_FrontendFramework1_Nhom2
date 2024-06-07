import { NgModule } from '@angular/core';
import { educationComponent } from './education.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';


@NgModule({
    imports: [
        BreadcrumbModule,
        Ng2SmartTableModule,
        NbCardModule
    ],
    declarations: [
        educationComponent
    ],
})
export class educationModule { }
