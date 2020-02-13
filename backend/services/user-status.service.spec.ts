import { TestBed } from '@angular/core/testing';

import { UserStatusService } from './user-status.service';

describe('UserStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStatusService = TestBed.get(UserStatusService);
    expect(service).toBeTruthy();
  });
});
