import { TestBed } from '@angular/core/testing';

import { MeratiService } from './merati.service';

describe('MeratiService', () => {
  let service: MeratiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeratiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
