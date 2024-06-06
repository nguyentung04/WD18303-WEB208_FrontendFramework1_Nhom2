import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { certificate } from 'app/@core/interfaces/pages/certificate';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

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
      phone: data.phone
    });
  }

  getById(id: number, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }

  putUser(data: IuserInfo, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, {
      img: data.img,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      email: data.email,
      phone: data.phone
    });
  }


  postCer(data: certificate, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      nameCertificate: data.nameCertificate,
      issued: data.issued,
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
      submissionTime: data.submissionTime,
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
      submissionTime: data.submissionTime,
      status: data.status,
      rate: data.rate,
      nameExaminer: data.nameExaminer,
      result: data.result
    });
  }

  

 deleteUser(table: string,id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }
}
