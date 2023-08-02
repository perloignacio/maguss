import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroSolicitudComponent } from './numero-solicitud.component';

describe('NumeroSolicitudComponent', () => {
  let component: NumeroSolicitudComponent;
  let fixture: ComponentFixture<NumeroSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumeroSolicitudComponent]
    });
    fixture = TestBed.createComponent(NumeroSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
