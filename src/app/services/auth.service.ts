import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject;
  public currentUser;
  isLogged = false;
  validateCurrentUser = false;

  constructor(private router: Router, private http: HttpClient, ) {
    this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject;
  }
  public currentUserValue() {
    if (this.currentUserSubject) {
      return true;
    }
    return false;
  }
  public getUser() {
    return this.currentUserSubject;
  }

  login(loginData, rememerMeFlag) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        observe: 'response'
      }),
      withCredentials: true,
    };
    loginData['rememerMeFlag'] = rememerMeFlag;
    return this.http.post<any>('http://localhost:3000/login', { loginData }, requestOptions);
  }
  checkRole(){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        observe: 'response'
      }),
      withCredentials: true,
    };
    return this.http.get<any>('http://localhost:3000/role', requestOptions);
  }

}
