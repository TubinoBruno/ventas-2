import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAlmacenItemsComponent } from './pedidos-almacen-items.component';

describe('PedidosAlmacenItemsComponent', () => {
  let component: PedidosAlmacenItemsComponent;
  let fixture: ComponentFixture<PedidosAlmacenItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAlmacenItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAlmacenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
