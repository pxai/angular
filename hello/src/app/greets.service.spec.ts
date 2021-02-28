import { TestBed } from '@angular/core/testing';

import { GreetsService } from './greets.service';

describe('GreetsService', () => {
  let service: GreetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
