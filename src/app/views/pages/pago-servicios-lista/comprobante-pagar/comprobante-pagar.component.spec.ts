import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantePagarComponent } from './comprobante-pagar.component';

describe('ComprobantePagarComponent', () => {
  let component: ComprobantePagarComponent;
  let fixture: ComponentFixture<ComprobantePagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantePagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantePagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
