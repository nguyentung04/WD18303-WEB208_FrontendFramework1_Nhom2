
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, skills: 'Viết code Php,java,Angular' },
      { id: 2, skills: 'Viết code Php,java,Angular' },
      { id: 3, skills: 'Viết code Php,java,Angular' }
    ];
  }
}

