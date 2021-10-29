import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipoDetalleComponent } from './anticipo-detalle.component';

describe('AnticipoDetalleComponent', () => {
  let component: AnticipoDetalleComponent;
  let fixture: ComponentFixture<AnticipoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
