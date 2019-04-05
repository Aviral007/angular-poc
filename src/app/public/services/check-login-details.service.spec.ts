import { TestBed } from '@angular/core/testing';

import { CheckLoginDetailsService } from './check-login-details.service';

describe('CheckLoginDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckLoginDetailsService = TestBed.get(CheckLoginDetailsService);
    expect(service).toBeTruthy();
  });
});
