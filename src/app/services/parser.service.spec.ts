import { TestBed } from '@angular/core/testing';

import { ParserService } from './parser.service';

describe('ParserServiceService', () => {
  let service: ParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
