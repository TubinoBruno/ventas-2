import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAlmacenSolicitudComponent } from './pedidos-almacen-solicitud.component';

describe('PedidosAlmacenSolicitudComponent', () => {
  let component: PedidosAlmacenSolicitudComponent;
  let fixture: ComponentFixture<PedidosAlmacenSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAlmacenSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAlmacenSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
