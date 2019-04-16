import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean>;
  user: BehaviorSubject<User>;

  constructor(private router: Router) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    this.user = new BehaviorSubject<User>(null);
  }

  async register() {

  }

  async login(username: string, password: string) {
    const url = environment.baseApiUrl + '/users/login';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const json = await response.json();

    if (json.success) {
      this.IsLoggedIn = true;
      sessionStorage.setItem('token', json.token);
      sessionStorage.setItem('uid', json.user_id);
      this.getUser(parseInt(sessionStorage.getItem('uid'), 10));
      return true;
    }
    return false;
  }

  async logout() {
    const url = environment.baseApiUrl + '/users/logout';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    });

    if (await response.status === 200) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('uid');
      this.IsLoggedIn = false;
      this.router.navigate(['home']);
    } else {
      // TODO display warning
    }
  }

  async getUser(id: number) {
    const url = environment.baseApiUrl + `/users/user/${id}`;
    const token = sessionStorage.getItem('token');

    if (token) {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      this.User = await response.json();
    }
  }

  set IsLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
  }

  get IsLoggedIn(): boolean {
    return this.isLoggedIn.getValue();
  }

  set User(value: User) {
    this.user.next(value);
  }

  get User(): User {
    return this.user.getValue();
  }

  IsLoggedInAsObservable(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  UserAsObservable(): Observable<User> {
    return this.user.asObservable();
  }
}
