import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastButtonComponent } from './fast-button.component';

describe('FastButtonComponent', () => {
  let component: FastButtonComponent;
  let fixture: ComponentFixture<FastButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
