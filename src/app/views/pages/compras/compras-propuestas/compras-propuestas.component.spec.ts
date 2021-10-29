import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPropuestasComponent } from './compras-propuestas.component';

describe('ComprasPropuestasComponent', () => {
  let component: ComprasPropuestasComponent;
  let fixture: ComponentFixture<ComprasPropuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasPropuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
