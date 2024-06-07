

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { activity } from 'app/@core/interfaces/pages/activity';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllActivity(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }

  postActivity(data: activity, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      full_name: data.full_name,
      role: data.role,
      start_time: data.start_time,
      end_time: data.end_time,
      content_description: data.content_description,
    });
  }

  putActivity(data: activity, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, {
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



  // bảng kinh nghiệm tin học
  getAllInformationtechnologyexperience(table: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${table}`);
  }

  postInformationtechnologyexperience(
    data: Informationtechnologyexperience,
    table: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      full_name: data.full_name,
      software: data.software,
      level: data.level,
    });
  }


  putInformationtechnologyexperience(
    data: Informationtechnologyexperience,
    id: number
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, {
      full_name: data.full_name,
      software: data.software,
      level: data.level,
    });
  }

  deleteInformationtechnologyexperience(
    table: string,
    id: number
  ): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${table}/${id}`);
  }
  // kết thúc bảng kinh nghiệm tin học

  // 
}
