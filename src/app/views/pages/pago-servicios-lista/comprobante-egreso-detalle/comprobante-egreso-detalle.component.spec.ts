import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteEgresoDetalleComponent } from './comprobante-egreso-detalle.component';

describe('ComprobanteEgresoDetalleComponent', () => {
  let component: ComprobanteEgresoDetalleComponent;
  let fixture: ComponentFixture<ComprobanteEgresoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteEgresoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteEgresoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
