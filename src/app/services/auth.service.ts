import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthInfo } from '../data/authInfo';
import { UserLoginData } from '../data/userLogin';
import { UserSignupData } from '../data/userSignup';
import { lsTokenName } from '../data/constants';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$: ReplaySubject<boolean> = new ReplaySubject(1);
  currentUser$: ReplaySubject<string> = new ReplaySubject(1);

  constructor(private http: HttpClient) {}

  logIn(loginData: UserLoginData): Observable<AuthInfo> {
    return this.http.post<AuthInfo>(config.API.LOGIN_POST, loginData).pipe(
      tap(authInfo => {
        this.isAuth$.next(true);
        this.currentUser$.next(authInfo.user.name);
        this.setSessionInfo(authInfo);
      }),
    );
  }

  signUp(signupData: UserSignupData): Observable<AuthInfo> {
    return this.http.post<AuthInfo>(config.API.SIGNUP_POST, signupData);
  }

  logOut() {
    localStorage.removeItem(lsTokenName);
    this.isAuth$.next(false);
    this.currentUser$.next(null);
  }

  checkSession() {
    const sessionInfo = JSON.parse(localStorage.getItem(lsTokenName));
    if (sessionInfo) {
      this.isAuth$.next(true);
      this.currentUser$.next(sessionInfo.user.name);
    }
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem(lsTokenName)).token.accessToken;
  }

  private setSessionInfo(authInfo: AuthInfo) {
    localStorage.setItem(lsTokenName, JSON.stringify(authInfo));
  }
}
