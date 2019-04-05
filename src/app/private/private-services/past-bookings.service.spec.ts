import { TestBed } from '@angular/core/testing';

import { PastBookingsService } from './past-bookings.service';

describe('PastBookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastBookingsService = TestBed.get(PastBookingsService);
    expect(service).toBeTruthy();
  });
});
