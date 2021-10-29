import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAlmacenItemsDetalleComponent } from './pedidos-almacen-items-detalle.component';

describe('PedidosAlmacenItemsDetalleComponent', () => {
  let component: PedidosAlmacenItemsDetalleComponent;
  let fixture: ComponentFixture<PedidosAlmacenItemsDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAlmacenItemsDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAlmacenItemsDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
