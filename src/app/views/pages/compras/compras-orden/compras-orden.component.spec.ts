import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasOrdenComponent } from './compras-orden.component';

describe('ComprasOrdenComponent', () => {
  let component: ComprasOrdenComponent;
  let fixture: ComponentFixture<ComprasOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
