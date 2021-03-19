import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPagosComponent } from './caja-pagos.component';

describe('CajaPagosComponent', () => {
  let component: CajaPagosComponent;
  let fixture: ComponentFixture<CajaPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
