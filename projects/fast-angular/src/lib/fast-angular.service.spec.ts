import { TestBed } from '@angular/core/testing';

import { FastAngularService } from './fast-angular.service';

describe('FastAngularService', () => {
  let service: FastAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
