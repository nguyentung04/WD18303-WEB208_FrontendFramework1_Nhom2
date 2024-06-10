import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentDeleteComponent } from './recruitment-delete.component';

describe('RecruitmentDeleteComponent', () => {
  let component: RecruitmentDeleteComponent;
  let fixture: ComponentFixture<RecruitmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
