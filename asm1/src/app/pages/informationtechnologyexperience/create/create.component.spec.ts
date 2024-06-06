import '../../@theme/styles/themes';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInformationtechnologyexperienceComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateInformationtechnologyexperienceComponent;
  let fixture: ComponentFixture<CreateInformationtechnologyexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInformationtechnologyexperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInformationtechnologyexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
