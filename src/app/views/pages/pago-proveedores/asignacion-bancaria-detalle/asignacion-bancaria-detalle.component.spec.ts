import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionBancariaDetalleComponent } from './asignacion-bancaria-detalle.component';

describe('AsignacionBancariaDetalleComponent', () => {
  let component: AsignacionBancariaDetalleComponent;
  let fixture: ComponentFixture<AsignacionBancariaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionBancariaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionBancariaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
