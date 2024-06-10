import { Iskill } from 'app/@core/interfaces/pages/skill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certificate } from 'app/@core/interfaces/pages/certificate';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { Activity } from 'app/@core/interfaces/pages/activity';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

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


  // kết thúc bảng kinh nghiệm tin học
}
