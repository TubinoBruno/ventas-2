import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAnticipoComponent } from './pago-anticipo.component';

describe('PagoAnticipoComponent', () => {
  let component: PagoAnticipoComponent;
  let fixture: ComponentFixture<PagoAnticipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoAnticipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAnticipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
