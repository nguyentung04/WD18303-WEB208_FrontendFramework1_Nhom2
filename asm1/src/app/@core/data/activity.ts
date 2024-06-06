
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class activityTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, fullname: 'John', role: 'giám đốc', start_and_end_times: '1 năm (vì năm sau lên chức rồi)', describe: 'kỹ năng có thừa' },
      
    ];
  }
}

