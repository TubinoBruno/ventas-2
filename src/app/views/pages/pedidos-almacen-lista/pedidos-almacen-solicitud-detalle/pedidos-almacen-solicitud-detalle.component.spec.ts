import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAlmacenSolicitudDetalleComponent } from './pedidos-almacen-solicitud-detalle.component';

describe('PedidosAlmacenSolicitudDetalleComponent', () => {
  let component: PedidosAlmacenSolicitudDetalleComponent;
  let fixture: ComponentFixture<PedidosAlmacenSolicitudDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAlmacenSolicitudDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAlmacenSolicitudDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
