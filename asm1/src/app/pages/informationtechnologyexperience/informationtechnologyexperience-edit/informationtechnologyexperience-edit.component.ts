import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'app/@core/services/apis/post.service';

import { Informationtechnologyexperience } from 'app/@core/interfaces/pages/informationtechnologyexperience';

@Component({
  selector: 'app-informationtechnologyexperience-edit',
  templateUrl: './informationtechnologyexperience-edit.component.html',
  styleUrls: ['./informationtechnologyexperience-edit.component.scss'],
})
export class InformationtechnologyexperienceEditComponent {
  constructor(
    private router: Router,
    private informationtechnologyexperienceService: PostService,
    private formedit: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }
  [x: string]: any;
  id: string;
  informationtechnologyexperience: Informationtechnologyexperience;
  table: string = 'informationtechnologyexperience';

  validForm: FormGroup;
  listInformationtechnologyexperience: Informationtechnologyexperience[] = [];



  ngOnInit(): void {
    this.validForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      software: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
    this.getByID(this.id);
  }

  onSubmit() {
    const UpdateInformationtechnologyexperience: Informationtechnologyexperience =
      {
        id: '',
        user_id: this.validForm.value.user_id,
        software: this.validForm.value.software,
        level: this.validForm.value.level,
      };



      console.log('Submitting form:', UpdateInformationtechnologyexperience);
      const numericId = parseInt(this.id, 10); // Chuyển đổi this.id thành một số
      this.informationtechnologyexperienceService
        .putInformationtechnologyexperience(UpdateInformationtechnologyexperience, numericId, this.table)
        .subscribe((res) => {
          UpdateInformationtechnologyexperience.id = res.id;
          console.log('Update response:', res);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/pages/informationtechnologyexperience']);
          });
        });
  }


  getByID(id: string): void {
    const ID = parseInt(id, 10); //Đảm bảo cơ sở được chỉ định cho  parseInt
    console.log(`Fetching certificate with ID: ${ID}`); // Ghi lại ID đang được tìm nạp

    this.informationtechnologyexperienceService.getById(ID, this.table).subscribe(
      (data) => {
        console.log('API response:', data); //Ghi lại phản hồi API đầy đủ
        this.listInformationtechnologyexperience = data[0]
        // if (data) {
        //   this.listInformationtechnologyexperience = [data]; //Gói dữ liệu trong một mảng để phù hợp với loại dự kiến
        //   if (this.validForm) {
        //     this.validForm.patchValue({
        //       user_id : data.user_id ,
        //       software: data.software,
        //       level: data.level,

        //     });
        //   }

        //   this.cdr.detectChanges(); //Phát hiện thay đổi kích hoạt theo cách thủ công
        // } else {
        //   console.warn('No certificate data found.');
        // }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  back() {
    this.router.navigate(['/pages/informationtechnologyexperience']);
  }


}