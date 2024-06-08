import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { PostService } from '../../@core/services/apis/post.service';
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
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getAllUser('userinfo').subscribe((users: IuserInfo[]) => {
      this.list = users;
    });

    // Subscribe to education list changes
    this.postService.education$.subscribe((education: Ieducation[]) => {
      this.education = education.map(edu => ({
        ...edu,
        startTime: new Date(edu.startTime).toLocaleDateString(),
        endTime: new Date(edu.endTime).toLocaleDateString()
      }));
    });

    this.getEducation();
    
    // Check for activated child routes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/education/');
      }
    });
  }
  
  getEducation() {
    this.postService.getAllEducation(this.table).subscribe();
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

  get paginatedEducation() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.education.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.education.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  totalPagesArray(): number[] {
    const totalPages = Math.ceil(this.education.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
  
  setCurrentPage(page: number) {
    this.currentPage = page;
  }


}