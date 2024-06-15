import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Activity } from 'app/@core/interfaces/pages/activity';

@Injectable({
  providedIn: 'root',
})
export class activityService {
  private apiUrl = environment.apiBaseUrl;
  private api = 'api';

  constructor(private http: HttpClient) {}
  // getById(id: number, table: string): Observable<any> {
  //   return this.http.get(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  // }

  getActivityById(id: string, table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  }

  getAllActivity(table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table);
  }
  delete(table: string, id: number): Observable<any> {
    return this.http.delete(
      this.apiUrl + '/' + this.api + '/' + table + '/' + id
    );
  }
  postActivity(data: Activity, table: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
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
}
