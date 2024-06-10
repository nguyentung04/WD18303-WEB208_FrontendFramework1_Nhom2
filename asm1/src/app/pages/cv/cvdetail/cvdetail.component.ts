import { Icv, IuserInfo } from './../../../@core/interfaces/pages/userinfo';
import { Component } from '@angular/core';
import { PostService } from 'app/@core/services/apis/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.scss']
})
export class CvdetailComponent {
  list: Icv;

  languages: string[] = [];
  skills: string[] = [];
  nameRecruitment: string[] = [];
  experiences: { name: string, vacancies: string, describe: string }[] = [];
  educations: { name: string, specialized: string, graduation_Type: string }[] = [];
  activities: string[] = [];
  certificates: string[] = [];
  infos: string[] = [];
  specializeds: string[] = [];



  table: string = 'userinfo';

  constructor(private UserInfo: PostService, private formedit: ActivatedRoute) {
  }
  id = this.formedit.snapshot.params.id;
  ngOnInit() {
    this.UserInfo.getByIdCV(this.id).subscribe(data => {
      const fetchedList = data[0] as Icv;
      console.log(fetchedList);
      this.list = fetchedList;
      this.languages = fetchedList.languages ? fetchedList.languages.split(',') : [];
      this.skills = fetchedList.skills ? fetchedList.skills.split(', ') : [];
      this.nameRecruitment = fetchedList.nameRecruitment ? fetchedList.nameRecruitment.split(',') : [];
      this.experiences = fetchedList.experiences ? fetchedList.experiences.split(',').map(ex => {
        const parts = ex.split(',');
        return {
          name: parts[0]?.trim() || '',
          vacancies: parts[1]?.trim() || '',
          describe: parts[2]?.trim() || '',
     
        }
      }) : [];

      this.educations = fetchedList.educations ? fetchedList.educations.split(',').map(edu => {
        const parts = edu.split('-');
        return {
          name: parts[0]?.trim() || '',
          specialized: parts[1]?.trim() || '',
          graduation_Type: parts[2]?.trim() || '',
        };
      }) : [];
      this.activities = fetchedList.activities ? fetchedList.activities.split(',') : [];
      this.certificates = fetchedList.certificates ? fetchedList.certificates.split(', ') : [];
      this.infos = fetchedList.infos ? fetchedList.infos.split(',') : [];
      this.specializeds = fetchedList.specializeds ? fetchedList.specializeds.split(', ') : [];
    })
  }



}
