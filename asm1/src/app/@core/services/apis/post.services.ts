import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { api } from '@environments/environmant.api';

@Injectable({
  providedIn: 'root'
})
export class PostService2 {


  private apiUrl = api.apiUrl;

  constructor(private http: HttpClient) { }

  getByID(id: number, table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + table + '/' + id);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post('/api/login', { email, password });
  }
  
  getAllUser(table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + table);
  }

  postUsers(data: Iusers, table: string): Observable<any> {
    return this.http.post(this.apiUrl + '/' + table, {
      name: data.name,
      email: data.email,
      role_id: data.role_id,
      date_start: data.date_start,
      password: data.password
    });
  }

  putUsers(data: Iusers, id: number, table: string): Observable<any> {
    return this.http.put(this.apiUrl + '/' + table + '/' + id, {
      name: data.name,
      email: data.email,
      role_id: data.role_id,
      date_start: data.date_start,
      password: data.password
    });
  }

  deleteUsers(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + table + '/' + id);
  }

  postEducation(data: Ieducation, table: string): Observable<any> {
    return this.http.post(this.apiUrl + '/' + table, {
      id: data.id,
      name: data.name,
      specialized: data.specialized,
      startTime: data.startTime,
      endTime: data.endTime,
      graduation_Type: data.graduation_Type,
      user_id: data.user_id
    });
  }

  putEducation(data: Ieducation, id: number, table: string): Observable<any> {
    return this.http.put(this.apiUrl + '/' + table + '/' + id, {
      id: data.id,
      name: data.name,
      specialized: data.specialized,
      startTime: data.startTime,
      endTime: data.endTime,
      graduation_Type: data.graduation_Type,
      user_id: data.user_id
    });
  }

  deleteEducation(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + table + '/' + id);
  }
}
