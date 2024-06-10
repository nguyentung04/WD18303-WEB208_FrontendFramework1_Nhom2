import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdetailComponent } from './cvdetail.component';

describe('CvdetailComponent', () => {
  let component: CvdetailComponent;
  let fixture: ComponentFixture<CvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
