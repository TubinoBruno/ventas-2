import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasProveedComponent } from './compras-proveed.component';

describe('ComprasProveedComponent', () => {
  let component: ComprasProveedComponent;
  let fixture: ComponentFixture<ComprasProveedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasProveedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasProveedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
