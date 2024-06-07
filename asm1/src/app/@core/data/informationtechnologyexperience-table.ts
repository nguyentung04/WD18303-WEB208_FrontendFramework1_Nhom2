
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class informationtechnologyexperienceTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, fullname: 'John', software: 'office 365', level: 'Tối thượng' },

    ];
  }
}

