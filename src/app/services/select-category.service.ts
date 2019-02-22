import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../data/category';

@Injectable({
  providedIn: 'root',
})
export class SelectCategoryService {
  currentCategory: Category;
  category$: Subject<Category> = new Subject<Category>();
  constructor() {
    this.category$.subscribe(category => {
      this.currentCategory = category;
    });
  }
}
