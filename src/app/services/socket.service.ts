import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Comment } from '../data/comment';
import { API } from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;
  private articleId: string;
  constructor() {
    this.socket = io(API.SOCKET_CONNECT_URL);
  }

  connect(articleId: string) {
    this.socket.connect();
    this.articleId = articleId;
    this.socket.emit('startView', articleId);
  }

  on(eventName: string) {
    return new Observable<Comment>(observer => {
      this.socket.on(eventName, data => {
        observer.next(data);
      });

      return {
        unsubscribe: () => {
          this.disconnect();
        },
      };
    });
  }

  private disconnect() {
    this.socket.emit('endView', this.articleId);
    this.socket.disconnect();
  }
}
