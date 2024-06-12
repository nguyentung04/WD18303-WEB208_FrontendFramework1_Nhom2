
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { PostService2 } from '../../@core/services/apis/post.services';
import { Ieducation } from 'app/@core/interfaces/pages/education';
import { IuserInfo } from 'app/@core/interfaces/pages/userinfo';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./education.component.scss'],
  templateUrl: './education.component.html',
})
export class educationComponent implements OnInit {
  list: IuserInfo[] = [];
  showRouterOutlet: boolean = false;
  education: Ieducation[] = [];
  table: string = 'education';

  constructor(private postService: PostService2, private router: Router) { }

  ngOnInit() {
    this.postService.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });
    this.getEducation();
    
    // Kiểm tra khi có route con được kích hoạt
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/education/');
      }
    });
  }
  
  getEducation() {
    this.postService.getAllUser(this.table).subscribe((education: Ieducation[]) => {
      this.education = education.map(edu => ({
        ...edu,
        startTime: new Date(edu.startTime).toLocaleDateString(),
        endTime: new Date(edu.endTime).toLocaleDateString()
      }));
    });
  }

  addEducation() {
    this.router.navigate(['/pages/education/create']);
  }

  editEducation(id: number) {
    this.router.navigate(['/pages/education/edit', id]); 
  }

  deleteEducation(id: number) {
    if(confirm("Bạn có chắc chắn muốn xóa dùng này?")) {
      this.postService.deleteEducation(this.table, id).subscribe(() => {
        this.getEducation();
      });
    }
  }
}