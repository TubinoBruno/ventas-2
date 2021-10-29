import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoRendirFacturaComponent } from './fondo-rendir-factura.component';

describe('FondoRendirFacturaComponent', () => {
  let component: FondoRendirFacturaComponent;
  let fixture: ComponentFixture<FondoRendirFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoRendirFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoRendirFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
