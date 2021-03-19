import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosificacionesComponent } from './dosificaciones.component';

describe('DosificacionesComponent', () => {
  let component: DosificacionesComponent;
  let fixture: ComponentFixture<DosificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
