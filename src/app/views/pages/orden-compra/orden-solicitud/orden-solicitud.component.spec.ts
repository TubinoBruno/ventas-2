import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenSolicitudComponent } from './orden-solicitud.component';

describe('OrdenSolicitudComponent', () => {
  let component: OrdenSolicitudComponent;
  let fixture: ComponentFixture<OrdenSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
