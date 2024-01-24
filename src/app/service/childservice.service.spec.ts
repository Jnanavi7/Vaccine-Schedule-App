import { TestBed } from '@angular/core/testing';

import { ChildserviceService } from './childservice.service';

describe('ChildserviceService', () => {
  let service: ChildserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
