import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAnticipoComponent } from './proveedor-anticipo.component';

describe('ProveedorAnticipoComponent', () => {
  let component: ProveedorAnticipoComponent;
  let fixture: ComponentFixture<ProveedorAnticipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorAnticipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAnticipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
