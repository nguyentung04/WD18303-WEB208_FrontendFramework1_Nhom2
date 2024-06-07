
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class recruitmentData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, nameRecruitment:'Nguyen Van A', role: 'Nhân viên văn phòng', submissionTime: '11/3/2022', status: 'Đã xử lí', rate: 'Khá tốt', nameExaminer: 'Nguyễn Quang Tùng', result: 'Đậu' },
      { id: 2, nameRecruitment:'Nguyen Van A', role: 'Nhân viên văn phòng', submissionTime: '11/3/2022', status: 'Đã xử lí', rate: 'Khá tốt', nameExaminer: 'Nguyễn Quang Tùng', result: 'Đậu' },
      

    ];
  }
}

