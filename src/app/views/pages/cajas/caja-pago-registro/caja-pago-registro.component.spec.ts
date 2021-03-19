import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPagoRegistroComponent } from './caja-pago-registro.component';

describe('CajaPagoRegistroComponent', () => {
  let component: CajaPagoRegistroComponent;
  let fixture: ComponentFixture<CajaPagoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaPagoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPagoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
