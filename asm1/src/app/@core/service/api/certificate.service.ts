import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Unit {
  id!: string;
  name!: string;
  address!: string;
  description!: string;
  created_at!: string;
  updated_at!: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://knowledgehub.demopolyct.online/api/unit';

  constructor(
    private http: HttpClient
  ) { }

  getAllUnit(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  postUnit(data: Unit): Observable<any> {
    return this.http.post(this.baseUrl, {
      name: data.name,
      address: data.address,
      description: data.description,
    });
  }

  getUnitById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  editUnit(id: string, data: Unit): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteUnit(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
