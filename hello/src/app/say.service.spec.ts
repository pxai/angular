import { TestBed } from '@angular/core/testing';

import { SayService } from './say.service';

describe('SayService', () => {
  let service: SayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
