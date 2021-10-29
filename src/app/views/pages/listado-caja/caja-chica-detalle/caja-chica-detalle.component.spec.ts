import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaChicaDetalleComponent } from './caja-chica-detalle.component';

describe('CajaChicaDetalleComponent', () => {
  let component: CajaChicaDetalleComponent;
  let fixture: ComponentFixture<CajaChicaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaChicaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaChicaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
