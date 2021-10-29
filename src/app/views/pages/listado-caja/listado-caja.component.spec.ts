import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCajaComponent } from './listado-caja.component';

describe('ListadoCajaComponent', () => {
  let component: ListadoCajaComponent;
  let fixture: ComponentFixture<ListadoCajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
