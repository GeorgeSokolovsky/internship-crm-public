import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '.././data/arcticle';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAll(categoryId: string): Observable<Article[]> {
    return this.http.get<Article[]>(
      `${config.API.ARTICLES_LIST}?id=${categoryId}`,
    );
  }

  getById(id: string): Observable<Article> {
    return this.http.get<Article>(`${config.API.ARTICLES_LIST}/${id}`);
  }
}
