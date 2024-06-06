import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllUser(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
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

  getById(id: number,table:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }

  putUser(data: IuserInfo, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`,{
      img: data.img,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      email: data.email,
      phone: data.phone
    });
  }

 deleteUser(table: string,id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }
}
