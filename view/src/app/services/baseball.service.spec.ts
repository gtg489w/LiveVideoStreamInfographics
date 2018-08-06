import { TestBed, inject } from '@angular/core/testing';

import { BaseballService } from './baseball.service';

describe('BaseballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseballService]
    });
  });

  it('should be created', inject([BaseballService], (service: BaseballService) => {
    expect(service).toBeTruthy();
  }));
});
