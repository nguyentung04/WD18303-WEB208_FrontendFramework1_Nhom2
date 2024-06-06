import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformationtechnologyexperienceComponent } from './edit.component';

describe('EditInformationtechnologyexperienceComponent', () => {
  let component: EditInformationtechnologyexperienceComponent;
  let fixture: ComponentFixture<EditInformationtechnologyexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInformationtechnologyexperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInformationtechnologyexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
