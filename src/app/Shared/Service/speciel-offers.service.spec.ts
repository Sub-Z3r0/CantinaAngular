import { TestBed } from '@angular/core/testing';

import { SpecielOffersService } from './speciel-offers.service';

describe('SpecielOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecielOffersService = TestBed.get(SpecielOffersService);
    expect(service).toBeTruthy();
  });
});
