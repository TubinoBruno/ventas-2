import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoProveedoresComponent } from './pago-proveedores.component';

describe('PagoProveedoresComponent', () => {
  let component: PagoProveedoresComponent;
  let fixture: ComponentFixture<PagoProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
