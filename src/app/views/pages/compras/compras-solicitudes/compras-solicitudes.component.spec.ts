import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSolicitudesComponent } from './compras-solicitudes.component';

describe('ComprasSolicitudesComponent', () => {
  let component: ComprasSolicitudesComponent;
  let fixture: ComponentFixture<ComprasSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
