import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoSolicitudComponent } from './fondo-solicitud.component';

describe('FondoSolicitudComponent', () => {
  let component: FondoSolicitudComponent;
  let fixture: ComponentFixture<FondoSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
