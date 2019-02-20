import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockArticles, mockArticle } from './mock.news';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getAll(){
    return new BehaviorSubject(mockArticles)
  }

  getById(id: string) {
    return new BehaviorSubject(mockArticle);
  }

}
