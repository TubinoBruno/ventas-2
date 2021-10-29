import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoRecisionComponent } from './contrato-recision.component';

describe('ContratoRecisionComponent', () => {
  let component: ContratoRecisionComponent;
  let fixture: ComponentFixture<ContratoRecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoRecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoRecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
