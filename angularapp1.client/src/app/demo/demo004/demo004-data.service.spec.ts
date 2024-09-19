import { TestBed } from '@angular/core/testing';

import { Demo004DataService } from './demo004-data.service';

describe('Demo004DataService', () => {
  let service: Demo004DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demo004DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
