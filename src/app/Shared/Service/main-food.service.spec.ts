import { TestBed } from '@angular/core/testing';

import { MainFoodService } from './main-food.service';

describe('MainFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainFoodService = TestBed.get(MainFoodService);
    expect(service).toBeTruthy();
  });
});
