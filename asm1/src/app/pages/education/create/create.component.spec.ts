import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducationComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateEducationComponent;
  let fixture: ComponentFixture<CreateEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEducationComponent;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
