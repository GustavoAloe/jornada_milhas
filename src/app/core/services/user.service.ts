import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { UserPerson } from '../types/type';
import { jwtDecode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<UserPerson | null>(null)

  constructor(private tokenService: TokenService) { 
    if(this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as UserPerson;
    this.userSubject.next(user)
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  isLoggedIn() {
    return this.tokenService.hasToken();
  }
}
