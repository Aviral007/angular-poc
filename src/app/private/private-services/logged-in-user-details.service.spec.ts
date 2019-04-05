import { TestBed } from '@angular/core/testing';

import { LoggedInUserDetailsService } from './logged-in-user-details.service';

describe('LoggedInUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedInUserDetailsService = TestBed.get(LoggedInUserDetailsService);
    expect(service).toBeTruthy();
  });
});
