import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaPagoItemComponent } from './caja-pago-item.component';

describe('CajaPagoItemComponent', () => {
  let component: CajaPagoItemComponent;
  let fixture: ComponentFixture<CajaPagoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaPagoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaPagoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
