import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoServiciosListaComponent } from './pago-servicios-lista.component';

describe('PagoServiciosListaComponent', () => {
  let component: PagoServiciosListaComponent;
  let fixture: ComponentFixture<PagoServiciosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoServiciosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoServiciosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
