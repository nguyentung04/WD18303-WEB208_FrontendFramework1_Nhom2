import { NgModule } from '@angular/core';
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { userModule } from './userinfo/user.module';
import { skillModule } from './skill/skill.module';

import { certificateModule } from './certificate/certificate.module';
import { recruitmentModule } from './recruitment/recruitment.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from "../@theme/components/paginator/paginator.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    userModule,
    skillModule,
    certificateModule,
    recruitmentModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: []
})
export class PagesModule { }
