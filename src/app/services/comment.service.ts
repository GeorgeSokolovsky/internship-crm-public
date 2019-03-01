import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, CreateCommentDto } from '.././data/comment';
import { API } from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getAll(articleId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${API.COMMENTS_URL}/${articleId}`);
  }

  addComment(comment: CreateCommentDto): Observable<any> {
    return this.http.post<any>(API.COMMENTS_URL, comment);
  }
}
