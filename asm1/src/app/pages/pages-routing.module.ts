//userinfo
import { DeleteComponent } from './userinfo/delete/delete.component';
import { EditComponent } from './userinfo/edit/edit.component';
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
import { SkillComponent } from './skill/skill.component';
import { experienceComponent } from './experience/experience.component';
import { languageComponent } from './inlanguage/language.component';

import { educationComponent } from './education/education.component';
import { certificateComponent } from './certificate/certificate.component';
import { recruitmentComponent } from './recruitment/recruitment.component';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { activityComponent } from './activity/activity.component';
import { RecruitmentCreateComponent } from './recruitment/recruitment-create/recruitment-create.component';
import { RecruitmentEditComponent } from './recruitment/recruitment-edit/recruitment-edit.component';
import { RecruitmentDeleteComponent } from './recruitment/recruitment-delete/recruitment-delete.component';
import { CertificateCreatteComponent } from './certificate/certificate-creatte/certificate-creatte.component';
import { CertificateEditComponent } from './certificate/certificate-edit/certificate-edit.component';
import { CertificateDeleteComponent } from './certificate/certificate-delete/certificate-delete.component';



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
      data: { breadcrumb: 'Thông tin đăng nhập' },
    },
    {
      path: 'userinfo',
      component: userComponent,
      data: { breadcrumb: 'Thông tin ứng viên' },
      children: [
        {
          path: 'create',
          component: CreateComponent,
          data: { breadcrumb: 'Thêm nhân viên' },
        },
        {
          path: 'edit/:id',
          component: EditComponent,
          data: { breadcrumb: 'Cập nhật thông tin' },
        },
        {
          path: 'delete',
          component: DeleteComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
    },
    {
      path: 'education',
      component: educationComponent,
      data: { breadcrumb: 'Thông tin học vấn' },
    },
    {
      path: 'skill',
      component: SkillComponent,
      data: { breadcrumb: 'Kỹ năng làm việc' },
      children: [
        {
          path: 'create',
          component: CreateSkillComponent,
          data: { breadcrumb: 'Thêm kỹ năng' }
        },
        {
          path: 'edit/:id',
          component: EditSkillComponent,
          data: { breadcrumb: 'Sửa kỹ năng' }
        },

      ]
    },
    {
      path: 'recruitment',
      component: recruitmentComponent,
      data: { breadcrumb: ' Quản lý tuyển dụng' },
      children: [
        {
          path: 'create',
          component: RecruitmentCreateComponent,
          data: { breadcrumb: 'Thêm tuyển dụng' },
        },
        {
          path: 'edit/:id',
          component: RecruitmentEditComponent,
          data: { breadcrumb: 'Cập nhật tuyển dụng' },
        },
        {
          path: 'delete',
          component: RecruitmentDeleteComponent,
          data: { breadcrumb: 'Xóa tuyển dụng' },
        },
      ]
    },
    {
      path: 'certificate',
      component: certificateComponent,
      data: { breadcrumb: 'Quản lý chứng chỉ' },
      children: [
        {
          path: 'create',
          component: CertificateCreatteComponent,
          data: { breadcrumb: 'Thêm chứng chỉ' },
        },
        {
          path: 'edit/:id',
          component: CertificateEditComponent,
          data: { breadcrumb: 'Cập nhật chứng chỉ' },
        },
        {
          path: 'delete',
          component: CertificateDeleteComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
    },

    {
      path: 'informationtechnologyexperience',
      component: informationtechnologyexperienceComponent,
      data: {breadcrumb: 'Quản lý kinh nghiệm tin học'},
    },
    {
      path: 'activity',
      component: activityComponent,
      data: {breadcrumb: 'Quản lý hoạt động'},
    },
    {
      path: 'inlanguage',
      component: languageComponent,
      data: { breadcrumb: 'Quản lý ngôn ngữ' },
    },
    {
      path: 'experience',
      component: experienceComponent,
      data: {breadcrumb: 'Quản lý kinh nghiệm'},
    },
   
 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
