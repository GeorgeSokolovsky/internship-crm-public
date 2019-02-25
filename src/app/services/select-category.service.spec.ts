import { TestBed } from '@angular/core/testing';

import { SelectCategoryService } from './select-category.service';

describe('SelectCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectCategoryService = TestBed.get(SelectCategoryService);
    expect(service).toBeTruthy();
  });
});
