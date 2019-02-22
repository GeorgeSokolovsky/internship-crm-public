import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '.././data/arcticle';
import { mockArticle } from '.././mock.news';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAll(category: string) {
    return this.http.get<Article[]>(`${config.API.ARTICLES_LIST}/${category}`);
  }

  getById(id: string) {
    return new BehaviorSubject(mockArticle);
  }
}
