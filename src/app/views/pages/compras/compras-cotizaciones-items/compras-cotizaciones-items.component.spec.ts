import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasCotizacionesItemsComponent } from './compras-cotizaciones-items.component';

describe('ComprasCotizacionesItemsComponent', () => {
  let component: ComprasCotizacionesItemsComponent;
  let fixture: ComponentFixture<ComprasCotizacionesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasCotizacionesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasCotizacionesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
