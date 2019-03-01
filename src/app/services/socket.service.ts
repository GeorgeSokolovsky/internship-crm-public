import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { API } from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;
  constructor() {
    this.socket = io(API.SOCKET_CONNECT_URL);
  }

  connect(articleId: string) {
    this.socket.connect();
    this.socket.emmit('startView', articleId);
  }

  disconnect(articleId: string) {
    this.socket.emmit('endView', articleId);
    this.socket.disconnect();
  }

  on(event_name: string) {
    return new Observable<any>(observer => {
      this.socket.on(event_name, data => {
        observer.next(data);
      });
    });
  }
}
