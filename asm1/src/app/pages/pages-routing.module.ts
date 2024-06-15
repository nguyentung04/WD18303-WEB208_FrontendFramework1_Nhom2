//userinfo
import { DeleteComponent } from './userinfo/delete/delete.component';
import { CreateComponent } from './userinfo/create/create.component';
//skill
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';


import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { userComponent } from './userinfo/user.component';
import { usersComponent } from './users/users.component';
// import { usersComponent } from './userinfo/user.component';
import { EditComponent } from './users/edit/edit.component';

import { SkillComponent } from './skill/skill.component';
import { experienceComponent } from './experience/experience.component';
import { languageComponent } from './inlanguage/language.component';
import { CreateUsersComponent } from './users/create/create.component'
import { educationComponent } from './education/education.component';
import { CreateEducationComponent } from './education/create/create.component';
import { EditEducationComponent } from './education/edit/edit.component';
import { DeleteEducationComponent } from './education/delete/delete.component';
import { certificateComponent } from './certificate/certificate.component';
import { recruitmentComponent } from './recruitment/recruitment.component';
import { InformationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { ActivityComponent } from './activity/activity.component';
import { RecruitmentCreateComponent } from './recruitment/recruitment-create/recruitment-create.component';
import { RecruitmentEditComponent } from './recruitment/recruitment-edit/recruitment-edit.component';
import { RecruitmentDeleteComponent } from './recruitment/recruitment-delete/recruitment-delete.component';
import { CertificateCreatteComponent } from './certificate/certificate-creatte/certificate-creatte.component';
import { CertificateEditComponent } from './certificate/certificate-edit/certificate-edit.component';
import { CertificateDeleteComponent } from './certificate/certificate-delete/certificate-delete.component';
import { ActivityCreateComponent } from './activity/activity-create/activity-create.component';
import { ActivityEditComponent } from './activity/activity-edit/activity-edit.component';
import { ActivityDeleteComponent } from './activity/activity-delete/activity-delete.component';
import { InformationtechnologyexperienceCreateComponent } from './informationtechnologyexperience/informationtechnologyexperience-create/informationtechnologyexperience-create.component';
import { InformationtechnologyexperienceEditComponent } from './informationtechnologyexperience/informationtechnologyexperience-edit/informationtechnologyexperience-edit.component';
import { InformationtechnologyexperienceDeleteComponent } from './informationtechnologyexperience/informationtechnologyexperience-delete/informationtechnologyexperience-delete.component';
import { CreateLanguageComponent } from './inlanguage/create/create.component';
import { EditLanguageComponent } from './inlanguage/edit/edit.component';
import { CreateExperienceComponent } from './experience/create-experience/create-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { CvComponent } from './cv/cv.component';
import { CvdetailComponent } from './cv/cvdetail/cvdetail.component';
import { EditComponent1 } from './userinfo/edit/edit.component';




const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { breadcrumb: 'Trang chủ' },
    },
    {
      path: 'users',
      component: usersComponent,
      data: { breadcrumb: 'Thông tin người dùng' },
    },
    {
      path: 'users/create',
      component: CreateUsersComponent,
      data: { breadcrumb: 'Thêm người dùng' },
    },

    {
      path: 'users/edit/:id',
      component: EditComponent,
      data: { breadcrumb: 'Cập nhật người dùng' },
    },
    {
      path: 'users/delete',
      component: CreateComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },

    {
      path: 'userinfo',
      component: userComponent,
      data: { breadcrumb: 'Thông tin ứng viên' },
    },
    {
      path: 'userinfo/create',
      component: CreateComponent,
      data: { breadcrumb: 'Thêm nhân viên' },
    },
    {
      path: 'userinfo/edit/:id',
      component: EditComponent1,
      data: { breadcrumb: 'Cập nhật thông tin' },
    },
    {
      path: 'userinfo/delete',
      component: DeleteComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },
    {
      path: 'education',
      component: educationComponent,
      data: { breadcrumb: 'Thông tin học vấn' },
    },
    {
      path: 'education/create',
      component: CreateEducationComponent,
      data: { breadcrumb: 'Thêm hồ sơ học vấn' },
    },

    {
      path: 'education/edit/:id',
      component: EditEducationComponent,
      data: { breadcrumb: 'Cập nhật hồ sơ học vấn' },
    },
    {
      path: 'education/delete',
      component: DeleteEducationComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },

    {
      path: 'skill',
      component: SkillComponent,
      data: { breadcrumb: 'Kỹ năng làm việc' },
    },
    {
      path: 'skill/create',
      component: CreateSkillComponent,
      data: { breadcrumb: 'Thêm kỹ năng' }
    },
    {
      path: 'skill/edit/:id',
      component: EditSkillComponent,
      data: { breadcrumb: 'Sửa kỹ năng' }
    },
    {
      path: 'recruitment',
      component: recruitmentComponent,
      data: { breadcrumb: ' Quản lý tuyển dụng' },
    },
    {
      path: 'recruitment/create',
      component: RecruitmentCreateComponent,
      data: { breadcrumb: 'Thêm tuyển dụng' },
    },
    {
      path: 'recruitment/edit/:id',
      component: RecruitmentEditComponent,
      data: { breadcrumb: 'Cập nhật tuyển dụng' },
    },
    {
      path: 'recruitment/delete',
      component: RecruitmentDeleteComponent,
      data: { breadcrumb: 'Xóa tuyển dụng' },
    },
    {
      path: 'certificate',
      component: certificateComponent,
      data: { breadcrumb: 'Quản lý chứng chỉ' },
    },
    {
      path: 'certificate/create',
      component: CertificateCreatteComponent,
      data: { breadcrumb: 'Thêm chứng chỉ' },
    },
    {
      path: 'certificate/edit/:id',
      component: CertificateEditComponent,
      data: { breadcrumb: 'Cập nhật chứng chỉ' },
    },
    {
      path: 'certificate/delete',
      component: CertificateDeleteComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },
    {
      path: 'informationtechnologyexperience',
      component: InformationtechnologyexperienceComponent,
      data: { breadcrumb: 'Quản lý kinh nghiệm tin học' },
    },
    {
      path: 'informationtechnologyexperience/create',
      component: InformationtechnologyexperienceCreateComponent,
      data: { breadcrumb: 'Thêm nhân viên' },
    },
    {
      path: 'informationtechnologyexperience/edit/:id',
      component: InformationtechnologyexperienceEditComponent,
      data: { breadcrumb: 'Cập nhật thông tin' },
    },
    {
      path: 'informationtechnologyexperience/delete',
      component: InformationtechnologyexperienceDeleteComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },
    {
      path: 'activity',
      component: ActivityComponent,
      data: { breadcrumb: 'Quản lý hoạt động' },
    },
    {
      path: 'activity/create',
      component: ActivityCreateComponent,
      data: { breadcrumb: 'Thêm nhân viên' },
    },
    {
      path: 'activity/edit/:id',
      component: ActivityEditComponent,
      data: { breadcrumb: 'Cập nhật thông tin' },
    },
    {
      path: 'activity/delete',
      component: ActivityDeleteComponent,
      data: { breadcrumb: 'Xóa nhân viên' },
    },
    {
      path: 'inlanguage',
      component: languageComponent,
      data: { breadcrumb: 'Quản lý bảng ngoại ngữ' },
    },
    {
      path: 'inlanguage/create',
      component: CreateLanguageComponent,
      data: { breadcrumb: 'Thêm bảng ngoại ngữ ' },
    },
    {
      path: 'inlanguage/edit/:id',
      component: EditLanguageComponent,
      data: { breadcrumb: 'Cập nhật bảng ngoại ngữ' },
    },


    {
      path: 'experience',
      component: experienceComponent,
      data: { breadcrumb: 'Quản lý kinh nghiệm' },
    },

    {
      path: 'experience/create',
      component: CreateExperienceComponent,
      data: { breadcrumb: 'Thêm bảng kinh nghiệm' },
    },
    {
      path: 'experience/edit/:id',
      component: EditExperienceComponent,
      data: { breadcrumb: 'Cập nhật bảng kinh nghiệm' },
    },

    {
      path: 'cv',
      component: CvComponent,
      data: { breadcrumb: 'Quản lý cv' },
    },
    {
      path: 'cv/cvdetail/:id',
      component: CvdetailComponent,
      data: { breadcrumb: 'chi tiết' }
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}