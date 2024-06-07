import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ilanguage } from 'app/@core/interfaces/pages/language';
import { IExperience } from 'app/@core/interfaces/pages/experience';

@Injectable({
  providedIn: 'root',
})
export class LevelStateService {
  private levelSource = new Subject<{ action: string, data: (Ilanguage[] | IExperience[]), table: string }>();
  users = this.levelSource.asObservable();

  Users(action: string, data: Ilanguage[] | IExperience[], table: string) {
    this.levelSource.next({ action, data, table });
  };

}

