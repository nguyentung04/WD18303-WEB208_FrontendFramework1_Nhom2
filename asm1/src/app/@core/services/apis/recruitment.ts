
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recruitment } from 'app/@core/interfaces/pages/recruitment';
import { environment } from '@environments/environment';






@Injectable({
  providedIn: 'root',
})
export class RecruitmenttService {
    private  apiBaseUrl = environment.apiBaseUrl
    private api = 'api';
constructor(private http: HttpClient) {}

  
getById(id: number, table: string): Observable<any> {
  return this.http.get(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id);
}

getUserById(id: string, table: string): Observable<any> {
  return this.http.get(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id);
}

getAllUser(table: string): Observable<any> {
    return this.http.get(this.apiBaseUrl + '/' + this.api + '/' + table);
  }
  
  
  //ungtuyen
  postRe(data: recruitment, table: string): Observable<any> {
    return this.http.post(this.apiBaseUrl + '/' + this.api + '/' + table , {
      user_id: data.user_id,
      role: data.role,
      status: data.status,
      rate: data.rate,
      result: data.result,
    });
  }

  putRe(data: recruitment, id: number, table: string): Observable<any> {
    return this.http.put(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id, {
      user_id: data.user_id,
      role: data.role,
      status: data.status,
      rate: data.rate,
      result: data.result,
    });
  }

  deleteUser(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id);;
  }

}