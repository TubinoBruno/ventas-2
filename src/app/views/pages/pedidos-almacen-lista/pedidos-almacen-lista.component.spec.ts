import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAlmacenListaComponent } from './pedidos-almacen-lista.component';

describe('PedidosAlmacenListaComponent', () => {
  let component: PedidosAlmacenListaComponent;
  let fixture: ComponentFixture<PedidosAlmacenListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAlmacenListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAlmacenListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
