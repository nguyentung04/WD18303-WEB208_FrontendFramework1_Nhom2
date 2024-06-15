import { NgModule } from '@angular/core';
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { userModule } from './userinfo/user.module';
import { usersModule } from './users/users.module';
import { educationModule } from './education/education.module';
import { skillModule } from './skill/skill.module';
<<<<<<< HEAD

=======
import { certificateModule } from './certificate/certificate.module';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { recruitmentModule } from './recruitment/recruitment.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from "../@theme/components/paginator/paginator.module";
import { informationtechnologyexperienceModule } from './informationtechnologyexperience/informationtechnologyexperience.module';
<<<<<<< HEAD



import { activityModule } from './activity/activity.module';
import { experienceModule } from './experience/experience.module';
import { languageModule } from './inlanguage/language.module';
import { CvModule } from './cv/cv.module';
import { certificateModule } from './certificate/certificate.module';
=======
import { activityModule } from './activity/activity.module';
import { languageModule } from './inlanguage/language.module';
import { experienceModule } from './experience/experience.module';

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528



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
<<<<<<< HEAD
    experienceModule,
    CvModule
=======
    experienceModule
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
  declarations: [
    PagesComponent,
   
  ],
  providers: []
})
export class PagesModule { }
