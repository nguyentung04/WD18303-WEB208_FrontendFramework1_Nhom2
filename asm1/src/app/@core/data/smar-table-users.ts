import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, name: 'Khang', email: 'khangtuma@gmail.com', role: 'Admin', password:'khang123', dateCreated:'11/05/2003' },

    ];
  }
}

