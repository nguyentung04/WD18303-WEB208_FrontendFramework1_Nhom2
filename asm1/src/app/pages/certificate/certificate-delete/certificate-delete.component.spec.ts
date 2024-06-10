import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDeleteComponent } from './certificate-delete.component';

describe('CertificateDeleteComponent', () => {
  let component: CertificateDeleteComponent;
  let fixture: ComponentFixture<CertificateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
