import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCajaChicaComponent } from './nueva-caja-chica.component';

describe('NuevaCajaChicaComponent', () => {
  let component: NuevaCajaChicaComponent;
  let fixture: ComponentFixture<NuevaCajaChicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCajaChicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCajaChicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
