import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticateService } from '../_services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticateService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)//: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    let user = this.authService.userValue;
    if (!user) {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    if (!this.authorizate(route)) {
      // role not authorised so redirect to home page
      this.router.navigate(['/']);
      return false;
    }
    // authorised so return true
    return true;
  }

  private authorizate(route: ActivatedRouteSnapshot) {
    if (!route.data.roles) return true;

    let roles = this.authService.Roles;
    let countauthorization = 0;
    for (let i = 0; i < route.data.roles.length; i++) {
      let role: any = route.data.roles[i];
      if (roles.indexOf(role) >= 0) countauthorization++;
    }
    return countauthorization == route.data.roles.length;
  }
}
