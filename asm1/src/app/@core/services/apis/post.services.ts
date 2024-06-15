import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService2 {

  private  apiUrl = environment.apiBaseUrl;
  private api = 'api';

  constructor(private http: HttpClient) { }

  getByID(id: number, table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/' + this.api + '/login', { email, password });
  }

  getAllUser(table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table);
  }

  postUsers(data: Iusers, table: string): Observable<any> {
    return this.http.post(this.apiUrl + '/' + this.api + '/' + table, {
      name: data.name,
      email: data.email,
      role_id: data.role_id,
      date_start: data.date_start,
      password: data.password
    });
  }

  putUsers(data: Iusers, id: number, table: string): Observable<any> {
    return this.http.put(this.apiUrl + '/' + this.api + '/' + table + '/' + id, {
      name: data.name,
      email: data.email,
      role_id: data.role_id,
      date_start: data.date_start,
      password: data.password
    });
  }

  deleteUsers(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  }

  postEducation(data: Ieducation, table: string): Observable<any> {
    return this.http.post(this.apiUrl + '/' + this.api + '/' + table, {
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
    return this.http.put(this.apiUrl + '/' + this.api + '/' + table + '/' + id, {
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
    return this.http.delete(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  }
}
