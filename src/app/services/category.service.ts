import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../data/category';
import { Observable } from 'rxjs';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(config.API.CATEGORY_LIST);
  }
}
