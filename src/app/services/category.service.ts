import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../data/category';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(config.API.CATEGORY_LIST);
  }
}
