import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoRendirComponent } from './fondo-rendir.component';

describe('FondoRendirComponent', () => {
  let component: FondoRendirComponent;
  let fixture: ComponentFixture<FondoRendirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoRendirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoRendirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
