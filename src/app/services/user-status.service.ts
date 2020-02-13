import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {


  constructor(
    private http: HttpClient,
    private authservice:AuthService
  ) { }
  checkUserStatus(){
     const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        observe: 'response'
      }),
      withCredentials: true,
    };
    return this.http.get<any>('http://localhost:3000/check',requestOptions);
    // .pipe(map(res => {
    //   console.log(res);
    //   this.authservice.isLogged = true;
    // }),err => {
    //   console.log(err);
    // });
  }
}
