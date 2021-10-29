import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAnticipoDetalleComponent } from './proveedor-anticipo-detalle.component';

describe('ProveedorAnticipoDetalleComponent', () => {
  let component: ProveedorAnticipoDetalleComponent;
  let fixture: ComponentFixture<ProveedorAnticipoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorAnticipoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAnticipoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
