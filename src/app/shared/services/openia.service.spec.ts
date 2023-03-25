import { TestBed } from '@angular/core/testing';

import { OpeniaService } from './openia.service';

describe('OpeniaService', () => {
  let service: OpeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
