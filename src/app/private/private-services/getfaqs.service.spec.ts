import { TestBed } from '@angular/core/testing';

import { GetfaqsService } from './getfaqs.service';

describe('GetfaqsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfaqsService = TestBed.get(GetfaqsService);
    expect(service).toBeTruthy();
  });
});
