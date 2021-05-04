import { TestBed } from '@angular/core/testing';

import { MovieHomeService } from './movie-home.service';

describe('MovieHomeService', () => {
  let service: MovieHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
