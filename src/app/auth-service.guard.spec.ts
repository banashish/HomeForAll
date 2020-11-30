import { TestBed } from '@angular/core/testing';

import { AuthServiceGuard } from './auth-service.guard';

describe('AuthServiceGuard', () => {
  let guard: AuthServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
