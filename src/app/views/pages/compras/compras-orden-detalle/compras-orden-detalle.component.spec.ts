import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasOrdenDetalleComponent } from './compras-orden-detalle.component';

describe('ComprasOrdenDetalleComponent', () => {
  let component: ComprasOrdenDetalleComponent;
  let fixture: ComponentFixture<ComprasOrdenDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasOrdenDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasOrdenDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
