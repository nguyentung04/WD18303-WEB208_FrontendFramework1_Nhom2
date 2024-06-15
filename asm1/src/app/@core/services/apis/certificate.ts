

import {environment} from '@environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certificate } from 'app/@core/interfaces/pages/certificate';







@Injectable({
  providedIn: 'root',
})
export class CertificateService {
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
  

//chungchi
postCer(data: certificate, table: string): Observable<any> {
    return this.http.post(this.apiBaseUrl + '/' + this.api + '/' + table , {
      nameCertificate: data.nameCertificate,
      issued: data.issued,
      user_id: data.user_id,
      expiry: data.expiry,
     
    });
  }

  putCer(data: certificate, id: number,table: string): Observable<any> {
    return this.http.put(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id, {
      user_id: data.user_id,
      nameCertificate: data.nameCertificate,
      issued: data.issued,
      expiry: data.expiry,
    });
  }

  deleteUser(table: string, id: number): Observable<any> {
    return this.http.delete(this.apiBaseUrl + '/' + this.api + '/' + table + '/' + id);;
  }

}