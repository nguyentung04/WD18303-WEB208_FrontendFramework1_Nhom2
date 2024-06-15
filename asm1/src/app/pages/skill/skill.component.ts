import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'app/@core/services/apis/post.service';
import { Iskill } from 'app/@core/interfaces/pages/skill';

=======
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from 'app/@core/data/skill';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
<<<<<<< HEAD
  showRouterOutlet: boolean = false;

  lists: Iskill[] = [];
  list: Iskill[] = [];

  table: string = 'skill';

  id = this.formedit.snapshot.params.id;

  constructor(private router: Router, private skills: PostService,  private formedit: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterOutlet = this.router.url.includes('/skill/');
      }
    });
    this.getAll();

  }

  getAll() {
    this.skills.getAllUser(this.table).subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }


  delete(id: string) {
    const Id = parseInt(id);
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.skills.deleteUser(this.table,Id).subscribe(() => {
        console.log('Xóa thành công');
        this.getAll();
      }, error => {
        console.error(error);
      });
    }
  }

  add() {
    this.router.navigate(['/pages/skill/create'])
  }
  edit(id: string) {
    this.router.navigate([`/pages/skill/edit/${id}`])
  }
=======
  ngOnInit(): void { }

  skill = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      skills: {
        title: 'Kỹ năng ',
        type: 'string',
      }
  

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Bạn chắc chắn muốn xóa?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
}
