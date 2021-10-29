import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeDetalleComponent } from './cheque-detalle.component';

describe('ChequeDetalleComponent', () => {
  let component: ChequeDetalleComponent;
  let fixture: ComponentFixture<ChequeDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
