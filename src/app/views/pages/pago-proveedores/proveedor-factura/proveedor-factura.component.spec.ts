import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorFacturaComponent } from './proveedor-factura.component';

describe('ProveedorFacturaComponent', () => {
  let component: ProveedorFacturaComponent;
  let fixture: ComponentFixture<ProveedorFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
