import { NgModule } from '@angular/core';
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { userModule } from './userinfo/user.module';
import { usersModule } from './users/users.module';
import { educationModule } from './education/education.module';
import { skillModule } from './skill/skill.module';

import { recruitmentModule } from './recruitment/recruitment.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from "../@theme/components/paginator/paginator.module";
import { informationtechnologyexperienceModule } from './informationtechnologyexperience/informationtechnologyexperience.module';



import { activityModule } from './activity/activity.module';
import { experienceModule } from './experience/experience.module';
import { languageModule } from './inlanguage/language.module';
import { CvModule } from './cv/cv.module';
import { certificateModule } from './certificate/certificate.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    usersModule,
    NbMenuModule,
    educationModule,
    PaginatorModule,
    userModule,
    skillModule,
    certificateModule,
    recruitmentModule,
    informationtechnologyexperienceModule,
    activityModule,
    languageModule,
    experienceModule,
    CvModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
   
  ],
  providers: []
})
export class PagesModule { }
