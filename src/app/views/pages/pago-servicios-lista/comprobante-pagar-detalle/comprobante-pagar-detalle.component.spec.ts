import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantePagarDetalleComponent } from './comprobante-pagar-detalle.component';

describe('ComprobantePagarDetalleComponent', () => {
  let component: ComprobantePagarDetalleComponent;
  let fixture: ComponentFixture<ComprobantePagarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantePagarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantePagarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
