import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtechnologyexperienceEditComponent } from './informationtechnologyexperience-edit.component';

describe('InformationtechnologyexperienceEditComponent', () => {
  let component: InformationtechnologyexperienceEditComponent;
  let fixture: ComponentFixture<InformationtechnologyexperienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationtechnologyexperienceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationtechnologyexperienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
