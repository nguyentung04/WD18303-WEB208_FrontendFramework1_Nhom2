import { NgModule } from '@angular/core';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  imports: [
    BreadcrumbModule,
    Ng2SmartTableModule,
    NbCardModule
  ],
  declarations: [
    informationtechnologyexperienceComponent
  ],
})
export class informationtechnologyexperienceModule { }
