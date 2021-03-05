import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: any) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token: any = this.tokenService.getToken();
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }
 }
