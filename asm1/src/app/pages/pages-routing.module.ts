<<<<<<< HEAD
//userinfo
import { DeleteComponent } from './userinfo/delete/delete.component';
import { CreateComponent } from './userinfo/create/create.component';
//skill
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';

=======
import { DeleteComponent } from './userinfo/delete/delete.component';
import { EditComponent } from './userinfo/edit/edit.component';
import { CreateComponent } from './userinfo/create/create.component';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { userComponent } from './userinfo/user.component';
import { usersComponent } from './users/users.component';
<<<<<<< HEAD
// import { usersComponent } from './userinfo/user.component';
import {EditComponent} from './users/edit/edit.component';

import { SkillComponent } from './skill/skill.component';
import { experienceComponent } from './experience/experience.component';
import { languageComponent } from './inlanguage/language.component';
import {CreateUsersComponent} from './users/create/create.component'
import { educationComponent } from './education/education.component';
import {CreateEducationComponent} from './education/create/create.component';
import {EditEducationComponent } from './education/edit/edit.component';
import {DeleteEducationComponent} from './education/delete/delete.component';
import { certificateComponent } from './certificate/certificate.component';
import { recruitmentComponent } from './recruitment/recruitment.component';
import { InformationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { ActivityComponent } from './activity/activity.component';
=======
import { SkillComponent } from './skill/skill.component';
import { experienceComponent } from './experience/experience.component';
import { languageComponent } from './inlanguage/language.component';

import { educationComponent } from './education/education.component';
import { certificateComponent } from './certificate/certificate.component';
import { recruitmentComponent } from './recruitment/recruitment.component';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { activityComponent } from './activity/activity.component';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { RecruitmentCreateComponent } from './recruitment/recruitment-create/recruitment-create.component';
import { RecruitmentEditComponent } from './recruitment/recruitment-edit/recruitment-edit.component';
import { RecruitmentDeleteComponent } from './recruitment/recruitment-delete/recruitment-delete.component';
import { CertificateCreatteComponent } from './certificate/certificate-creatte/certificate-creatte.component';
import { CertificateEditComponent } from './certificate/certificate-edit/certificate-edit.component';
import { CertificateDeleteComponent } from './certificate/certificate-delete/certificate-delete.component';
<<<<<<< HEAD
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

=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528



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
<<<<<<< HEAD
      data: { breadcrumb: 'Thông tin người dùng' },
      children: [
        {
          path: 'create',
          component: CreateUsersComponent,
          data: { breadcrumb: 'Thêm người dùng' },
        },
       
        {
          path: 'edit/:id',
          component: EditComponent,
          data: { breadcrumb: 'Cập nhật người dùng' },
        },
        {
          path: 'delete',
          component: CreateComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
=======
      data: { breadcrumb: 'Thông tin đăng nhập' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    },
    {
      path: 'userinfo',
      component: userComponent,
<<<<<<< HEAD
      data: { breadcrumb: 'Thông tin ứng viên' },
=======
      data: { breadcrumb: 'Thông tin nhân viên' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
      children: [
        {
          path: 'create',
          component: CreateComponent,
          data: { breadcrumb: 'Thêm nhân viên' },
        },
        {
          path: 'edit/:id',
<<<<<<< HEAD
          component: EditComponent1,
=======
          component: EditComponent,
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
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
<<<<<<< HEAD
      component:  educationComponent,
      data: { breadcrumb: 'Thông tin học vấn' },
      children: [
        {
          path: 'create',
          component: CreateEducationComponent,
          data: { breadcrumb: 'Thêm hồ sơ học vấn' },
        },
       
        {
          path: 'edit/:id',
          component: EditEducationComponent,
          data: { breadcrumb: 'Cập nhật hồ sơ học vấn' },
        },
        {
          path: 'delete',
          component: DeleteEducationComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
=======
      component: educationComponent,
      data: { breadcrumb: 'Thông tin học vấn' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    },
    {
      path: 'skill',
      component: SkillComponent,
      data: { breadcrumb: 'Kỹ năng làm việc' },
<<<<<<< HEAD
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
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
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
<<<<<<< HEAD
          path: 'edit/:id',
          component: RecruitmentEditComponent,
          data: { breadcrumb: 'Cập nhật tuyển dụng' },
=======
          path: 'edit',
          component: RecruitmentEditComponent,
          data: { breadcrumb: 'Cập nhật thông tin' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
        },
        {
          path: 'delete',
          component: RecruitmentDeleteComponent,
<<<<<<< HEAD
          data: { breadcrumb: 'Xóa tuyển dụng' },
=======
          data: { breadcrumb: 'Xóa nhân viên' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
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
<<<<<<< HEAD
          path: 'edit/:id',
          component: CertificateEditComponent,
          data: { breadcrumb: 'Cập nhật chứng chỉ' },
=======
          path: 'edit',
          component: CertificateEditComponent,
          data: { breadcrumb: 'Cập nhật thông tin' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
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
<<<<<<< HEAD
      component: InformationtechnologyexperienceComponent,
      data: {breadcrumb: 'Quản lý kinh nghiệm tin học'},
      children: [
        {
          path: 'create',
          component: InformationtechnologyexperienceCreateComponent,
          data: { breadcrumb: 'Thêm nhân viên' },
        },
        {
          path: 'edit/:id',
          component: InformationtechnologyexperienceEditComponent,
          data: { breadcrumb: 'Cập nhật thông tin' },
        },
        {
          path: 'delete',
          component: InformationtechnologyexperienceDeleteComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
    },
    {
      path: 'activity',
      component: ActivityComponent,
      data: {breadcrumb: 'Quản lý hoạt động'},
      children: [
        {
          path: 'create',
          component: ActivityCreateComponent,
          data: { breadcrumb: 'Thêm nhân viên' },
        },
        {
          path: 'edit/:id',
          component: ActivityEditComponent,
          data: { breadcrumb: 'Cập nhật thông tin' },
        },
        {
          path: 'delete',
          component: ActivityDeleteComponent,
          data: { breadcrumb: 'Xóa nhân viên' },
        },
      ]
=======
      component: informationtechnologyexperienceComponent,
      data: {breadcrumb: 'Quản lý kinh nghiệm tin học'},
    },
    {
      path: 'activity',
      component: activityComponent,
      data: {breadcrumb: 'Quản lý hoạt động'},
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    },
    {
      path: 'inlanguage',
      component: languageComponent,
<<<<<<< HEAD
      data: { breadcrumb: 'Quản lý bảng ngoại ngữ' },
      children: [
        {
          path: 'create',
          component: CreateLanguageComponent,
          data: { breadcrumb: 'Thêm bảng ngoại ngữ ' },
        },
        {
          path: 'edit/:id',
          component: EditLanguageComponent,
          data: { breadcrumb: 'Cập nhật bảng ngoại ngữ' },
        },
       
      ]
=======
      data: { breadcrumb: 'Quản lý ngôn ngữ' },
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    },
    {
      path: 'experience',
      component: experienceComponent,
<<<<<<< HEAD
      data: { breadcrumb: 'Quản lý kinh nghiệm' },
      children: [

        {
          path: 'create',
          component: CreateExperienceComponent,
          data: { breadcrumb: 'Thêm bảng kinh nghiệm' },
        },
        {
          path: 'edit/:id',
          component: EditExperienceComponent,
          data: { breadcrumb: 'Cập nhật bảng kinh nghiệm' },
        },
        

      ]
    },

        {
      path: 'cv',
      component: CvComponent,
      data: { breadcrumb: 'Quản lý cv' },
      children: [
        {
          path: 'cvdetail/:id',
          component: CvdetailComponent,
          data: { breadcrumb: 'chi tiết' }
        }
      ]
    }
=======
      data: {breadcrumb: 'Quản lý kinh nghiệm'},
    },
   
 
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
