import { Iskill } from 'app/@core/interfaces/pages/skill';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certificate } from 'app/@core/interfaces/pages/certificate';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
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

  getAllUser(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }
  

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
      phone: data.phone,
    });
  }

  getById(id: number, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }

  getUserById(id: string, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }
  putUser(data: IuserInfo, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      img: data.img,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      email: data.email,
      phone: data.phone,
    });
  }

  postCer(data: certificate, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      nameCertificate: data.nameCertificate,
      issued: data.issued,
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

  updateUser(table: string, id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${table}/${id}`, data);
  }

  deleteUser(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }

  //skill
  postSkill(data: Iskill, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      skill: data.skill,
    });
  }
  putLanguage(data: Ilanguage, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
   
      language: data.language,
      level: data.level 
    });
  }

  putSkill(data: Iskill, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      user_id: data.user_id,
      skill: data.skill
    });
  }

  // bang hoat dong

  getAllActivity(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }

  postActivity(data: Activity, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`,  {
      full_name: data.full_name,
      role: data.role,
      start_time: data.start_time,
      end_time: data.end_time,
      content_description: data.content_description,
      
    });
  }

  putActivity(data: Activity, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      full_name: data.full_name,
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
  getAllInformationtechnologyexperience(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }

  postInformationtechnologyexperience(
    data:  Informationtechnologyexperience,
    table: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      full_name: data.full_name,
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
      full_name: data.full_name,
      software: data.software,
      level: data.level

    });
  }

  postLanguage(data: Ilanguage, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id: data.user_id,
      language: data.language,
      level: data.level 
    });
  }

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
 


  // kết thúc bảng kinh nghiệm tin học




  // private educationSubject = new BehaviorSubject<Ieducation[]>([]);
  // education$ = this.educationSubject.asObservable();

  // private userSubject = new BehaviorSubject<Iusers[]>([]);
  // users$ = this.userSubject.asObservable();

  // getAllEducation(table: string): Observable<Ieducation[]> {
  //   return this.http.get<Ieducation[]>(`${this.apiUrl}/${table}`).pipe(
  //     tap((educationList: Ieducation[]) => {
  //       this.setEducationList(educationList);
  //     })
  //   );
  // }

  // private setEducationList(educationList: Ieducation[]) {
  //   this.educationSubject.next(educationList);
  // }

  // getByID(id: number, table: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${table}/${id}`);
  // }

  // // getAllUser(table: string): Observable<any> {
  // //   return this.http.get(`${this.apiUrl}/${table}`);
  // // }

  // getAllUser2(table: string): Observable<Iusers[]> {
  //   return this.http.get<Iusers[]>(`${this.apiUrl}/${table}`).pipe(
  //     tap((userList: Iusers[]) => {
  //       this.setUserList(userList);
  //     })
  //   );
  // }

  // private setUserList(userList: Iusers[]) {
  //   this.userSubject.next(userList);
  // }

  // login(credentials: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, credentials);
  // }

  // logout() {
  //   localStorage.removeItem('userInfo');
  //   localStorage.removeItem('token');
  // }

  // postUsers(data: Iusers, table: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/${table}`, data).pipe(
  //     tap(() => this.getAllUser2(table).subscribe())
  //   );
  // }

  // putUsers(data: Iusers, id: number, table: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${table}/${id}`, data).pipe(
  //     tap(() => this.getAllUser2(table).subscribe())
  //   );
  // }

  // deleteUsers(table: string, id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${table}/${id}`).pipe(
  //     tap(() => this.getAllUser2(table).subscribe())
  //   );
  // }

  // postEducation(data: Ieducation, table: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/${table}`, data).pipe(
  //     tap(() => this.getAllEducation(table).subscribe())
  //   );
  // }

  // putEducation(data: Ieducation, id: number, table: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${table}/${id}`, data).pipe(
  //     tap(() => this.getAllEducation(table).subscribe())
  //   );
  // }

  // deleteEducation(table: string, id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${table}/${id}`).pipe(
  //     tap(() => this.getAllEducation(table).subscribe())
  //   );
  // }
}
