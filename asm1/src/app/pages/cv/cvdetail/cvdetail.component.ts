import { Icv} from './../../../@core/interfaces/pages/userinfo';
import { Component } from '@angular/core';
import { PostService } from 'app/@core/services/apis/post.service';
import { ActivatedRoute } from '@angular/router';
import html2pdf from 'html2pdf.js'; 


@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.scss']
})
export class CvdetailComponent {
  list: Icv[]=[];

  table: string = 'userinfo';

  constructor(private UserInfo: PostService, private formedit: ActivatedRoute) {
  }
  id = this.formedit.snapshot.params.id;
  ngOnInit() {
    this.UserInfo.getByIdCV(this.id).subscribe(data => {
      this.list= data[0] ;
  })
  }

  exportToPDF() {
    const element: HTMLElement = document.getElementById('ExportPdf'); 
    const opt = {
      margin:       1,
      filename:     'cv_detail.pdf',
      image:        { type: 'png', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  }


  }

