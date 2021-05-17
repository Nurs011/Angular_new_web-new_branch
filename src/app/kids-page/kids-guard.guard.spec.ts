import { TestBed } from '@angular/core/testing';
import {KidsGuardGuard} from "./kids-guard.guard";



describe('KidsGuardGuard', () => {
  let guard: KidsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KidsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
