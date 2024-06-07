import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLanguageComponent } from './edit.component';
import { EditComponent } from 'app/pages/userinfo/edit/edit.component';



describe('EditComponent', () => {
  let component: EditLanguageComponent;
  let fixture: ComponentFixture<EditLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
