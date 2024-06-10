import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtechnologyexperienceDeleteComponent } from './informationtechnologyexperience-delete.component';

describe('InformationtechnologyexperienceDeleteComponent', () => {
  let component: InformationtechnologyexperienceDeleteComponent;
  let fixture: ComponentFixture<InformationtechnologyexperienceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationtechnologyexperienceDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationtechnologyexperienceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
