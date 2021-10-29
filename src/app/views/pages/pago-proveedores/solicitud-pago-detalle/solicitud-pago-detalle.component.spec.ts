import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPagoDetalleComponent } from './solicitud-pago-detalle.component';

describe('SolicitudPagoDetalleComponent', () => {
  let component: SolicitudPagoDetalleComponent;
  let fixture: ComponentFixture<SolicitudPagoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPagoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPagoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
