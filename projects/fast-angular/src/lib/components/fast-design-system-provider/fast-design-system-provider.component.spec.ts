import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastDesignSystemProviderComponent } from './fast-design-system-provider.component';

describe('FastDesignSystemProviderComponent', () => {
  let component: FastDesignSystemProviderComponent;
  let fixture: ComponentFixture<FastDesignSystemProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastDesignSystemProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastDesignSystemProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
