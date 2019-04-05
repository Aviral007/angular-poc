import { TestBed } from '@angular/core/testing';

import { GetbookingService } from './getbooking.service';

describe('GetbookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbookingService = TestBed.get(GetbookingService);
    expect(service).toBeTruthy();
  });
});
