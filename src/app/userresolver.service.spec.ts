import { TestBed } from '@angular/core/testing';

import { UserresolverService } from './userresolver.service';

describe('UserresolverService', () => {
  let service: UserresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
