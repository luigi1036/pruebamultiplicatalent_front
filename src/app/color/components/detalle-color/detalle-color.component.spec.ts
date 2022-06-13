import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleColorComponent } from './detalle-color.component';

describe('DetalleColorComponent', () => {
  let component: DetalleColorComponent;
  let fixture: ComponentFixture<DetalleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
