import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPrecioNuevoComponent } from './producto-precio-nuevo.component';

describe('ProductoPrecioNuevoComponent', () => {
  let component: ProductoPrecioNuevoComponent;
  let fixture: ComponentFixture<ProductoPrecioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPrecioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPrecioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
