import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEducationComponent } from './delete.component';

describe('DeleteEducationComponent', () => {
  let component: DeleteEducationComponent;
  let fixture: ComponentFixture<DeleteEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
