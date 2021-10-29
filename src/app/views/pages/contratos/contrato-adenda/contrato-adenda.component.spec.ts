import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAdendaComponent } from './contrato-adenda.component';

describe('ContratoAdendaComponent', () => {
  let component: ContratoAdendaComponent;
  let fixture: ComponentFixture<ContratoAdendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoAdendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoAdendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
