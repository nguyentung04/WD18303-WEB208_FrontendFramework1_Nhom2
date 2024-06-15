import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Injectable({
  providedIn: 'root'
})
export class informationtechnologyexperienceService {


  private apiUrl = environment.apiBaseUrl;
  private api = 'api';
    apiBaseUrl: string;

  constructor(private http: HttpClient) { }

  getByID(id: number, table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
  }


  
  getAllInformationtechnologyexperience(table: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + this.api + '/' + table );
  }



  delete(table: string, id: number): Observable<any> {
    return this.http.delete(
      this.apiUrl + '/' + this.api + '/' + table + '/' + id
    );
  }

  postInformationtechnologyexperience(
    data:  Informationtechnologyexperience,
    table: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${table}`, {
      user_id : data.user_id ,
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
      user_id : data.user_id ,
      software: data.software,
      level: data.level

    });
  }



}
