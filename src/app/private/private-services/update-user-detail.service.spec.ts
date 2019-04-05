import { TestBed } from '@angular/core/testing';

import { UpdateUserDetailService } from './update-user-detail.service';

describe('UpdateUserDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateUserDetailService = TestBed.get(UpdateUserDetailService);
    expect(service).toBeTruthy();
  });
});
