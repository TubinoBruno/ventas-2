import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPagarComponent } from './cuenta-pagar.component';

describe('CuentaPagarComponent', () => {
  let component: CuentaPagarComponent;
  let fixture: ComponentFixture<CuentaPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
