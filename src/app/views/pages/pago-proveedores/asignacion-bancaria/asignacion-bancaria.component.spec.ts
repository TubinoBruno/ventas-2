import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionBancariaComponent } from './asignacion-bancaria.component';

describe('AsignacionBancariaComponent', () => {
  let component: AsignacionBancariaComponent;
  let fixture: ComponentFixture<AsignacionBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
