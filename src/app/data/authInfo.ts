import { UserInfo } from './userInfo';
import { Token } from './token';

export interface AuthInfo {
  user: UserInfo;
  token: Token;
}
