
import { Iskill } from 'app/@core/interfaces/pages/skill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { environment } from '@environments/environment';


@Injectable({
    providedIn: 'root',
})
export class UserInfoService {

    private apiUrl = environment.apiBaseUrl;
    private api = 'api';

    constructor(private http: HttpClient) { }


    getById(id: number, table: string): Observable<any> {
        return this.http.get(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
    }

    getAllUser(table: string): Observable<any> {
        return this.http.get(this.apiUrl + '/' + this.api + '/' + table);
    }
 

    uploadImg(formData: FormData, table: string): Observable<any> {
        return this.http.post(this.apiUrl + '/' + this.api + '/' + table + '/' + 'upload', formData);
    }
    postUser(data: IuserInfo, table: string): Observable<any> {
        return this.http.post(this.apiUrl + '/' + this.api + '/' + table, {
            img: data.img,
            fullname: data.fullname,
            birthday: data.birthday,
            address: data.address,
            email: data.email,
            phone: data.phone,
        });
    }

    deleteUser(table: string, id: number): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + this.api + '/' + table + '/' + id);
    }

    putUser(data: IuserInfo, id: number, table: string): Observable<any> {
        return this.http.put(this.apiUrl + '/' + this.api + '/' + table + '/' + id, {
            img: data.img,
            fullname: data.fullname,
            birthday: data.birthday,
            address: data.address,
            email: data.email,
            phone: data.phone,
        });
    }

    getByIdCV(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + this.api + '/' + 'cv' + '/' + id);
    }

    //skill
    postSkill(data: Iskill, table: string): Observable<any> {
        return this.http.post(this.apiUrl + '/' + this.api + '/' + table, {
            user_id: data.user_id,
            skill: data.skill,
        });
    }
    putSkill(data: Iskill, id: number, table: string): Observable<any> {
        return this.http.put(this.apiUrl + '/' + this.api + '/' + table + '/' + id, {
            skill: data.skill
        });
    }

}
