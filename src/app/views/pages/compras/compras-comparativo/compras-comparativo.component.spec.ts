import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasComparativoComponent } from './compras-comparativo.component';

describe('ComprasComparativoComponent', () => {
  let component: ComprasComparativoComponent;
  let fixture: ComponentFixture<ComprasComparativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasComparativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasComparativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
