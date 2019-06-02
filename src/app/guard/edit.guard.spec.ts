import { TestBed, async, inject } from '@angular/core/testing';

import { EditGuard } from './edit.guard';

describe('EditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditGuard]
    });
  });

  it('should ...', inject([EditGuard], (guard: EditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
