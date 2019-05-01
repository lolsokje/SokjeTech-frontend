import { TestBed } from '@angular/core/testing';

import { CountryListService } from './country-list.service';

describe('CountryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryListService = TestBed.get(CountryListService);
    expect(service).toBeTruthy();
  });
});
