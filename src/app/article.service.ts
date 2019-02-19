import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from "rxjs/operators";
import { mockArticles, mockArticle } from "./mock.news";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getAll(){
    return new BehaviorSubject(mockArticles)
      .pipe(tap(list => {
        list.forEach(elem => {
          elem.content = this.shorten(elem.content, 100);
        });
      }));
  }

  getById(id: string) {
    return new BehaviorSubject(mockArticle);
  }

  private shorten(str: string, maxLength: number) {
    if(str.length <= maxLength) {
      return;
    }

    return `${str.slice(0, maxLength)}...`;
  }
}
