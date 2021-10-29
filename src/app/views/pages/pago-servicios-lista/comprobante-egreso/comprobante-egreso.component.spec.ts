import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteEgresoComponent } from './comprobante-egreso.component';

describe('ComprobanteEgresoComponent', () => {
  let component: ComprobanteEgresoComponent;
  let fixture: ComponentFixture<ComprobanteEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
