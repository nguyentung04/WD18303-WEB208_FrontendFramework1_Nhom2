import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { CreateLanguageComponent } from 'app/pages/inlanguage/create/create.component';

describe('CreateComponent', () => {
  let component: CreateLanguageComponent;
  let fixture: ComponentFixture<CreateLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLanguageComponent);
=======

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
