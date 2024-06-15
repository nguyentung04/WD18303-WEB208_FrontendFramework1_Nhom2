import { Observable, tap} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { IExperience } from 'app/@core/interfaces/pages/experience';
import { environment } from '@environments/environment';






@Injectable({
  providedIn: 'root',
})
export class LaexService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  private api = 'api';
  private apiUrl=environment.apiBaseUrl

  constructor(private http: HttpClient) {}

  
  getById(id: number, table: string): Observable<any> {
    return this.http.get(this.apiUrl+'/'+this.api+'/'+table+'/'+id);
  }

  getUserById(id: string, table: string): Observable<any> {
    return this.http.get(this.apiUrl+'/'+this.api+'/'+table+'/'+id);
  }
 
  getAllUser(table: string): Observable<any> {
    return this.http.get(this.apiUrl+'/'+this.api+'/'+table);
  }
  deleteUser(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiUrl+'/'+this.api+'/'+table+'/'+id);
  }

// ngôn ngữ
  postLanguage(data: Ilanguage, table: string): Observable<any> {
    return this.http.post(this.apiUrl+'/'+this.api+'/'+table, {
      user_id: data.user_id,
      language: data.language,
      level: data.level 
    });
  }
  putLanguage(data: Ilanguage, id: number, table: string): Observable<any> {
    return this.http.put(this.apiUrl+'/'+this.api+'/'+table+'/'+id, {
   
      language: data.language,
      level: data.level 
    });
  }

  //kinh nghiệm
  postExperience(data: IExperience, table: string): Observable<any> {
    return this.http.post(this.apiUrl+'/'+this.api+'/'+table, {
      user_id: data.user_id,
      company: data.company,
      vacancies: data.vacancies,
      startdate: data.startdate,
      enddate: data.enddate,
      describe: data.describe
    });
  }

  putExperience(data: IExperience, id: number, table: string): Observable<any> {
    return this.http.put(this.apiUrl+'/'+this.api+'/'+table+'/'+id, {
      user_id: data.user_id,
      company: data.company,
      vacancies: data.vacancies,
      startdate: data.startdate,
      enddate: data.enddate,
      describe: data.describe
    });
  }
}
