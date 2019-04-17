import { TestBed, inject } from '@angular/core/testing';

import { UniverseService } from './universe.service';

describe('UniverseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniverseService]
    });
  });

  it('should be created', inject([UniverseService], (service: UniverseService) => {
    expect(service).toBeTruthy();
  }));
});
