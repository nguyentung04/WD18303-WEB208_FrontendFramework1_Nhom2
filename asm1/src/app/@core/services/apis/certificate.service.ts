import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private apiUrl = 'http://localhost:3000/api/api/certificate'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getCertificates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCertificateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Additional methods for create, edit, delete can be added here
}
