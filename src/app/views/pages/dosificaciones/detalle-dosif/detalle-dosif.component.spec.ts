import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDosifComponent } from './detalle-dosif.component';

describe('DetalleDosifComponent', () => {
  let component: DetalleDosifComponent;
  let fixture: ComponentFixture<DetalleDosifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDosifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDosifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
