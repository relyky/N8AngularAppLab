import { TestBed } from '@angular/core/testing';

import { Demo002DataService } from './demo002-data.service';

describe('Demo002DataService', () => {
  let service: Demo002DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demo002DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
