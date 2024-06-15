<<<<<<< HEAD
import { Iskill } from 'app/@core/interfaces/pages/skill';
import { BehaviorSubject, Observable, tap } from 'rxjs';
=======
import { Observable } from 'rxjs';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certificate } from 'app/@core/interfaces/pages/certificate';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
<<<<<<< HEAD
import { Activity } from 'app/@core/interfaces/pages/activity';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { IExperience } from 'app/@core/interfaces/pages/experience';






@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  
  getById(id: number, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }

  getUserById(id: string, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }
 
=======


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

  getAllUser(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }
<<<<<<< HEAD
  
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

  uploadImg(formData: FormData, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}/upload`, formData);
  }
  postUser(data: IuserInfo, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      img: data.img,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      email: data.email,
<<<<<<< HEAD
      phone: data.phone,
    });
  }
  updateUser(table: string, id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${table}/${id}`, data);
  }
  deleteUser(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
=======
      phone: data.phone
    });
  }
 

  getById(id: number, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  }

  putUser(data: IuserInfo, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      img: data.img,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      email: data.email,
<<<<<<< HEAD
      phone: data.phone,
=======
      phone: data.phone
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    });
  }


<<<<<<< HEAD

  getByIdCV(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cv/${id}`);
  }

//chungchi
=======
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  postCer(data: certificate, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      nameCertificate: data.nameCertificate,
      issued: data.issued,
<<<<<<< HEAD
      user_id: data.user_id,
      expiry: data.expiry,
     
    });
  }

  putCer(data: certificate, id: number,table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      user_id: data.user_id,
      nameCertificate: data.nameCertificate,
      issued: data.issued,
      expiry: data.expiry,
    });
  }

  //ungtuyen
  postRe(data: recruitment, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      role: data.role,
      status: data.status,
      rate: data.rate,
      result: data.result,
    });
  }

  putRe(data: recruitment, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      user_id: data.user_id,
      role: data.role,
      status: data.status,
      rate: data.rate,
      result: data.result,
    });
  }
  //

  

  //skill
  postSkill(data: Iskill, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      skill: data.skill,
    });
  }
  

  putSkill(data: Iskill, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      skill: data.skill
    });
  }

// bang hoat dong
postActivity(data: Activity, table: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/${table}`,  {
    user_id: data.user_id,
    role: data.role,
    start_time: data.start_time,
    end_time: data.end_time,
    content_description: data.content_description,
    
  });
}

putActivity(data: Activity, id: number, table: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/${table}/${id}`, {
    user_id: data.user_id,
    role: data.role,
    start_time: data.start_time,
    end_time: data.end_time,
    content_description: data.content_description,
    
  });
}



 
  deleteActivity(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }
  
  // kết thúc bảng hoạt động

  // bảng kinh nghiệm khóa học
  postInformationtechnologyexperience(
    data:  Informationtechnologyexperience,
    table: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id : data.user_id ,
      software: data.software,
      level: data.level

    });
  }

  putInformationtechnologyexperience(
    data:  Informationtechnologyexperience,
    id: number,
    table: string
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`,  {
      user_id : data.user_id ,
      software: data.software,
      level: data.level

    });
  }
// ngôn ngữ
  postLanguage(data: Ilanguage, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      language: data.language,
      level: data.level 
    });
  }
  putLanguage(data: Ilanguage, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
   
      language: data.language,
      level: data.level 
    });
  }

  //kinh nghiệm
  postExperience(data: IExperience, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      company: data.company,
      vacancies: data.vacancies,
      startdate: data.startdate,
      enddate: data.enddate,
      describe: data.describe
    });
  }

  putExperience(data: IExperience, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      user_id: data.user_id,
      company: data.company,
      vacancies: data.vacancies,
      startdate: data.startdate,
      enddate: data.enddate,
      describe: data.describe
    });
  }
 


=======
      nameReceiver: data.nameReceiver,
      dateRange: data.dateRange,
      expiry: data.expiry,
      image: data.image
    });
  }

  putCer(data: certificate, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`,{
      nameCertificate: data.nameCertificate,
      issued: data.issued,
      nameReceiver: data.nameReceiver,
      dateRange: data.dateRange,
      expiry: data.expiry,
      image: data.image
    });
  }


  postRe(data: recruitment, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      nameRecruitment: data.nameRecruitment,
      role: data.role,

      status: data.status,
      rate: data.rate,
      nameExaminer: data.nameExaminer,
      result: data.result
    });
  }


  
  putRe(data: recruitment, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`,{
      nameRecruitment: data.nameRecruitment,
      role: data.role,
      // submissionTime: data.submissionTime,
      status: data.status,
      rate: data.rate,
      nameExaminer: data.nameExaminer,
      result: data.result
    });
  }

  

 deleteUser(table: string,id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
}
