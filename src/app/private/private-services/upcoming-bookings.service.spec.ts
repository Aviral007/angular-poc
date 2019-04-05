import { TestBed } from '@angular/core/testing';

import { UpcomingBookingsService } from './upcoming-bookings.service';

describe('UpcomingBookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpcomingBookingsService = TestBed.get(UpcomingBookingsService);
    expect(service).toBeTruthy();
  });
});
