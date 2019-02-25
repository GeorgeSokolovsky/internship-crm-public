import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Category } from '../data/category';

@Injectable({
  providedIn: 'root',
})
export class SelectCategoryService {
  category$: ReplaySubject<Category> = new ReplaySubject<Category>(1);
}
