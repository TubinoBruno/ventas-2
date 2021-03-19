import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHistorialPrecioComponent } from './producto-historial-precio.component';

describe('ProductoHistorialPrecioComponent', () => {
  let component: ProductoHistorialPrecioComponent;
  let fixture: ComponentFixture<ProductoHistorialPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoHistorialPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoHistorialPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
