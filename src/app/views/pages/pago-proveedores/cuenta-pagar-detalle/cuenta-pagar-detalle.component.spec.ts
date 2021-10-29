import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPagarDetalleComponent } from './cuenta-pagar-detalle.component';

describe('CuentaPagarDetalleComponent', () => {
  let component: CuentaPagarDetalleComponent;
  let fixture: ComponentFixture<CuentaPagarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaPagarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaPagarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
