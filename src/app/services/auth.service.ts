import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
  jwtHelper: JwtHelper = new JwtHelper();
  token: string;

  constructor(private http: HttpClient) {
    this.currentUser.next(this.getUser());
  }

  saveTokenAndLogin (token: string): void {
    localStorage.setItem('token', <string>token);
    this.token = token;
    this.currentUser.next(this.getUser());
  }

  register(user: User): Observable<boolean> {
    return this.http.post('/api/account/register', user)
      .map(response => <string>response)
      .map(token => {
        if (token) {
          this.saveTokenAndLogin(token);
        }
        return !!token;
      });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post('/api/account/login', { email, password }, { responseType: 'text' })
      .map(response => <string>response)
      .map(token => {
        if (token) {
          this.saveTokenAndLogin(token);
        }
        return !!token;
      });
  }

  update(user: User): Observable<User> {
    return this.http.put('/api/account/update', { firstname: user.firstname, lastname: user.lastname})
      .map(response => <User>response);
  }

  getUser(): User {
    var token = localStorage.getItem('token');
    if (token) {
      var decoded = this.jwtHelper.decodeToken(token);
      const user: User = {
        firstname: decoded.firstname,
        lastname: decoded.lastname,
        email: decoded.email,
        password: ''
      };
      return user;
    }
    return undefined;
  }

  getToken(): string {
    return (this.token) ? this.token : ''; 
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.next(undefined);
  }
}
