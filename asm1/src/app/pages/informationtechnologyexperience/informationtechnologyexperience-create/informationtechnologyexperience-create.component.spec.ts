import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtechnologyexperienceCreateComponent } from './informationtechnologyexperience-create.component';

describe('InformationtechnologyexperienceCreateComponent', () => {
  let component: InformationtechnologyexperienceCreateComponent;
  let fixture: ComponentFixture<InformationtechnologyexperienceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationtechnologyexperienceCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationtechnologyexperienceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
