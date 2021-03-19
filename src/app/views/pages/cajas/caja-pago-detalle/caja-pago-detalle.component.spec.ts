import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPagoDetalleComponent } from './caja-pago-detalle.component';

describe('CajaPagoDetalleComponent', () => {
  let component: CajaPagoDetalleComponent;
  let fixture: ComponentFixture<CajaPagoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaPagoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPagoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
