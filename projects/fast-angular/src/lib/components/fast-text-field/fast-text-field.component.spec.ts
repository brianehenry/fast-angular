import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastTextFieldComponent } from './fast-text-field.component';

describe('FastTextFieldComponent', () => {
  let component: FastTextFieldComponent;
  let fixture: ComponentFixture<FastTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
