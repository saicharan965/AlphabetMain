import { TestBed } from '@angular/core/testing';

import { LoginStateGuard } from './login-state.guard';

describe('LoginStateGuard', () => {
  let guard: LoginStateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginStateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
