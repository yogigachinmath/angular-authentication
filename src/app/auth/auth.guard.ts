import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { UserStatusService } from '../services/user-status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private currentUserSubject;
  // public currentUser;
  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService,
              private userstatus: UserStatusService, ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Observable<boolean>((observer) => {
    if (!this.authService.validateCurrentUser) {
      this.authService.validateCurrentUser = true;
      this.userstatus.checkUserStatus().subscribe(res => {
        this.authService.isLogged = true;
        this.authService.checkRole().subscribe(response => {
          if (response === 'admin') {
            observer.next(true);
            observer.complete();
          } else {
            alert('only admin is allowed to this page');
            this.router.navigate(['/']);
            observer.next(false);
            observer.complete();
          }
        }, (err) => {
           this.router.navigate(['/login']);
           observer.next(false);
           observer.complete();
        });
        //  console.log(this.authService.isLogged);
      }, (err) => {
        // console.log(err);
        this.router.navigate(['/login']);
      });
    } else {
      console.log('user prersent');
      this.authService.checkRole().subscribe(res => {
        if (res === 'admin') {
           observer.next(true);
           observer.complete();
        } else {
          alert('only admin is allowed to this page');
          this.router.navigate(['/']);
          observer.next(false);
          observer.complete();
        }
      }, (err) => {
        this.router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      });
    }
  });
  }
  // Authorization(){
  //   this.authService.checkRole().subscribe(res => {
  //     console.log(res);
  //     return true;
  //   },(err)=>{
  //     console.log(err);
  //     return false;
  //   })
  // }

}
