import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPropuestasDetalleComponent } from './compras-propuestas-detalle.component';

describe('ComprasPropuestasDetalleComponent', () => {
  let component: ComprasPropuestasDetalleComponent;
  let fixture: ComponentFixture<ComprasPropuestasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasPropuestasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPropuestasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
