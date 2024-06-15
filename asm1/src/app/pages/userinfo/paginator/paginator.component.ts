import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() apiUrl!: string;
  @Input() current_page!: number;
  @Input() last_page!: number;
  @Output() dataList: EventEmitter<any> = new EventEmitter();
  hasPreviousPage: boolean=true;
  hasNextPage: boolean=false;
  indexPage= 1;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  getPaginator(): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${this.indexPage}`)
  }
  getData(){
    this.getPaginator().subscribe(data => {
      this.dataList
      console.log(data);
    },error =>console.error(error))
  }
  goFirstPage(){
    this.indexPage=1;
    this.hasPreviousPage= true;
    this.hasNextPage=false;
    this.getData();
  }

  goLastPage(){
    this.hasPreviousPage= false;
    this.hasNextPage= true;
    this.indexPage=this.last_page;
    this.getData();
  }

}