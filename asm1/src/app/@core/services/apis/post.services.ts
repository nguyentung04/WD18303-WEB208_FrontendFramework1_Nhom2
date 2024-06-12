import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from 'app/@core/interfaces/pages/users';
import { Ieducation } from 'app/@core/interfaces/pages/education';

@Injectable({
  providedIn: 'root'
})
export class PostService2 {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  private educationSubject = new BehaviorSubject<Ieducation[]>([]);
  education$ = this.educationSubject.asObservable();

  private userSubject = new BehaviorSubject<Iusers[]>([]);
  users$ = this.userSubject.asObservable();

  getAllEducation(table: string): Observable<Ieducation[]> {
    return this.http.get<Ieducation[]>(`${this.apiUrl}/${table}`).pipe(
      tap((educationList: Ieducation[]) => {
        this.setEducationList(educationList);
      })
    );
  }

  private setEducationList(educationList: Ieducation[]) {
    this.educationSubject.next(educationList);
  }

  getByID(id: number, table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}/${id}`);
  }

  getAllUser(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }

  getAllUser2(table: string): Observable<Iusers[]> {
    return this.http.get<Iusers[]>(`${this.apiUrl}/${table}`).pipe(
      tap((userList: Iusers[]) => {
        this.setUserList(userList);
      })
    );
  }

  private setUserList(userList: Iusers[]) {
    this.userSubject.next(userList);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  }

  postUsers(data: Iusers, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, data).pipe(
      tap(() => this.getAllUser2(table).subscribe())
    );
  }

  putUsers(data: Iusers, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, data).pipe(
      tap(() => this.getAllUser2(table).subscribe())
    );
  }

  deleteUsers(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`).pipe(
      tap(() => this.getAllUser2(table).subscribe())
    );
  }

  postEducation(data: Ieducation, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, data).pipe(
      tap(() => this.getAllEducation(table).subscribe())
    );
  }

  putEducation(data: Ieducation, id: number, table: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${table}/${id}`, data).pipe(
      tap(() => this.getAllEducation(table).subscribe())
    );
  }

  deleteEducation(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`).pipe(
      tap(() => this.getAllEducation(table).subscribe())
    );
  }
}