import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasComparativasDetalleComponent } from './compras-comparativas-detalle.component';

describe('ComprasComparativasDetalleComponent', () => {
  let component: ComprasComparativasDetalleComponent;
  let fixture: ComponentFixture<ComprasComparativasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasComparativasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasComparativasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
