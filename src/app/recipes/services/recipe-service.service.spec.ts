import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipe-service.service';

describe('RecipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service).toBeTruthy();
  });
});
