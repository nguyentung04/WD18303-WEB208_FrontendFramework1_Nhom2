import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, nameSchool: 'Nguyễn Quang Diêu', specialized: 'Tâm lý học', startTime: '11/05/2024', endTime:'11/05/2027',graduationType:'Giỏi', describe:'còn trống'},

    ];
  }
}

