import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() apiUrl!: string;
  @Input() current_page!: number;
  @Input() last_page!: number;
  @Output() dataList: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  goToPage(page: number): void {
    this.getPage(page).subscribe(
      data => {
        this.dataList.emit(data); // Gửi dữ liệu về SkillComponent
      },
      error => {
        console.error('Error fetching page:', error);
      }
    );
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.last_page);
  }

  goToNextPage(): void {
    if (this.current_page < this.last_page) {
      this.goToPage(this.current_page + 1);
    }
  }

  goToPreviousPage(): void {
    if (this.current_page > 1) {
      this.goToPage(this.current_page - 1);
    }
  }

  isFirstPage(): boolean {
    return this.current_page === 1;
  }

  isLastPage(): boolean {
    return this.current_page === this.last_page;
  }
}
