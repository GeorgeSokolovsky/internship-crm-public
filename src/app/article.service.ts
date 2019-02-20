import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from './data/arcticle';
import { mockArticles, mockArticle } from './mock.news';
import * as config from '../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Article[]>(config.API.ARTICLES_LIST);
  }

  getById(id: string) {
    return new BehaviorSubject(mockArticle);
  }

}
