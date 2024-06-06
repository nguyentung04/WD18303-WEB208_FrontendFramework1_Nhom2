import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//
import { userComponent } from './userinfo/user.component';
import { CreateComponent } from './userinfo/create/create.component';
import { EditComponent } from './userinfo/edit/edit.component';
import { DeleteComponent } from './userinfo/delete/delete.component';
//
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
//
import { activityComponent } from './activity/activity.component';
import { EditActivityComponent } from './activity/edit/edit.component';
import { DeleteActivityComponent } from './activity/delete/delete.component';
import { CreateActivityComponent } from './activity/create/create.component';
//
import { SkillComponent } from './skill/skill.component';
//
import { educationComponent } from './education/education.component';
//
import { usersComponent } from './users/users.component';
//
import { languageComponent } from './inlanguage/language.component';
//
import { experienceComponent } from './experience/experience.component';
//
import { recruitmentComponent } from './recruitment/recruitment.component';
//
import { certificateComponent } from './certificate/certificate.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'users',
        component: usersComponent,
        data: { breadcrumb: 'Thông tin đăng nhập' },
      },
      {
        path: 'userinfo',
        component: userComponent,
        data: { breadcrumb: 'Thông tin nhân viên' },
        children: [
          {
            path: 'create',
            component: CreateComponent,
            data: { breadcrumb: 'Thêm nhân viên' },
          },
          {
            path: 'edit',
            component: EditComponent,
            data: { breadcrumb: 'Cập nhật thông tin' },
          },
          {
            path: 'delete',
            component: DeleteComponent,
            data: { breadcrumb: 'Xóa nhân viên' },
          },
        ],
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
      },
      {
        path: 'recruitment',
        component: recruitmentComponent,
        data: { breadcrumb: ' Quản lý tuyển dụng' },
      },
      {
        path: 'certificate',
        component: certificateComponent,
        data: { breadcrumb: 'Quản lý chứng chỉ' },
      },
      {
        path: 'informationtechnologyexperience',
        component: informationtechnologyexperienceComponent,
        data: { breadcrumb: 'Quản lý kinh nghiệm tin học' },
      },
      {
        path: 'activity',

        component: activityComponent,
        data: { breadcrumb: 'Quản lý hoạt động' },
        children: [
          {
            path: 'create',
            component: CreateActivityComponent,
            data: { breadcrumb: 'Thêm hoạt động' },
          },
          {
            path: 'edit',
            component: EditActivityComponent,
            data: { breadcrumb: 'Sửa hoạt động' },
          },
          {
            path: 'delete',
            component: DeleteActivityComponent,
            data: { breadcrumb: 'Xóa hoạt động' },
          },
        ],
      },
      {
        path: 'inlanguage',
        component: languageComponent,
        data: { breadcrumb: 'Quản lý ngôn ngữ' },
      },
      {
        path: 'experience',
        component: experienceComponent,
        data: { breadcrumb: 'Quản lý kinh nghiệm' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
