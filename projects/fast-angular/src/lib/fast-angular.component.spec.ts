import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAngularComponent } from './fast-angular.component';

describe('FastAngularComponent', () => {
  let component: FastAngularComponent;
  let fixture: ComponentFixture<FastAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
