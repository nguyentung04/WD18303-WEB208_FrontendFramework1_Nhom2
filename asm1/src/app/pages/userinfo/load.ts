import { Injectable } from '@angular/core';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';
import { Iskill } from 'app/@core/interfaces/pages/skill';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private usersSource = new Subject<{ action: string, data: (IuserInfo[] | Iskill[]), table: string }>();
  users = this.usersSource.asObservable();

  Users(action: string, data: IuserInfo[] | Iskill[], table: string) {
    this.usersSource.next({ action, data, table });
  };

}

