import { TestBed } from '@angular/core/testing';

import { FlashProvider } from './flash.provider';

describe('FlashProvider', () => {
  let service: FlashProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
