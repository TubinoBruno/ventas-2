import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionDetalleComponent } from './rendicion-detalle.component';

describe('RendicionDetalleComponent', () => {
  let component: RendicionDetalleComponent;
  let fixture: ComponentFixture<RendicionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendicionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
