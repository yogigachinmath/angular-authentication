import { Injectable } from '@angular/core';
import { CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserStatusService } from '../services/user-status.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService,
              private userstatus: UserStatusService, ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(route.url[0].path);
    if (!this.authService.validateCurrentUser) {
      this.authService.validateCurrentUser = true;
      this.userstatus.checkUserStatus().subscribe(res => {
        this.authService.isLogged = true;
        //  console.log(this.authService.isLogged,'dffd');
        if (window.location.pathname === '/login') {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }, err => {
        console.log(err);
        if (window.location.pathname !== '/login') {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
          // this.router.navigate(['/login']);
      });
    } else if (route.url[0].path === 'login') {
      // console.log(this.authService.isLogged);
      if (this.authService.isLogged) {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      if (!this.authService.isLogged) {
        this.router.navigate(['/login']);
        return false;
      }
    }
    return true;
  }
}
