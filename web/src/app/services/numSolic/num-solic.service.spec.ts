import { TestBed } from '@angular/core/testing';

import { NumSolicService } from './num-solic.service';

describe('NumSolicService', () => {
  let service: NumSolicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumSolicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
