import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorFacturaDetalleComponent } from './proveedor-factura-detalle.component';

describe('ProveedorFacturaDetalleComponent', () => {
  let component: ProveedorFacturaDetalleComponent;
  let fixture: ComponentFixture<ProveedorFacturaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorFacturaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorFacturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
