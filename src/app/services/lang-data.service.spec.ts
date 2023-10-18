import { TestBed } from '@angular/core/testing';

import { LangDataService } from './lang-data.service';

describe('LangDataService', () => {
  let service: LangDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
