import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaDetalleComponent } from './transferencia-detalle.component';

describe('TransferenciaDetalleComponent', () => {
  let component: TransferenciaDetalleComponent;
  let fixture: ComponentFixture<TransferenciaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
