import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDosifComponent } from './nueva-dosif.component';

describe('NuevaDosifComponent', () => {
  let component: NuevaDosifComponent;
  let fixture: ComponentFixture<NuevaDosifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaDosifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDosifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
