import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCreatteComponent } from './certificate-creatte.component';

describe('CertificateCreatteComponent', () => {
  let component: CertificateCreatteComponent;
  let fixture: ComponentFixture<CertificateCreatteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateCreatteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateCreatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
