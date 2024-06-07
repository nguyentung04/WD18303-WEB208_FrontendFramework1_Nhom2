import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteLanguageComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteLanguageComponent;
  let fixture: ComponentFixture<DeleteLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
