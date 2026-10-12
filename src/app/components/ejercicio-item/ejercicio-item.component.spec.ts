import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioItemComponent } from './ejercicio-item.component';

describe('EjercicioItemComponent', () => {
  let component: EjercicioItemComponent;
  let fixture: ComponentFixture<EjercicioItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
