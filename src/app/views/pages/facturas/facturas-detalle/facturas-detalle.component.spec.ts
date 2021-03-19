import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasDetalleComponent } from './facturas-detalle.component';

describe('FacturasDetalleComponent', () => {
  let component: FacturasDetalleComponent;
  let fixture: ComponentFixture<FacturasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
