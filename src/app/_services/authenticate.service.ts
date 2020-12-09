import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User, UserLogin } from '../_models/User'
import { AuthModel, MenuModel, NotificationModel } from '../_models/AuthModel'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private authStorage = "authentication";
  private rememberStorage = "RememberMe"
  private authSubject: BehaviorSubject<AuthModel>;
  public auth: Observable<AuthModel>;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.authSubject = new BehaviorSubject<AuthModel>(JSON.parse(sessionStorage.getItem(this.authStorage)!));
    this.auth = this.authSubject.asObservable();
  }

  public get userValue(): User {
    if (!this.authSubject.value) return this.authSubject.value;
    return this.authSubject.value.UserProfile;
  }
  public get menuValue(): Array<MenuModel> {
    if (!this.authSubject.value) return this.authSubject.value;
    return this.authSubject.value.Menu;
  }

  public get AuthorizationValue(): string {
    if (!this.authSubject.value) return this.authSubject.value;
    return "Bearer " + this.authSubject.value.Token;
  }

  public getCurrentMenu(component: any, includeParent: boolean = false): MenuModel {
    let menu!: MenuModel;
    let componentName = "";
    if (component && component.name) {
      let length: number = component.name.length - 'Component'.length;
      componentName = component.name.substring(0, length);
    }

    this.menuValue.forEach((element: MenuModel) => {
      let child!: MenuModel;
      element.Children.forEach((childEl: MenuModel) => {
        if (childEl.ModuleName == componentName) {
          child = childEl;
          return;
        }
      });
      if (child) {
        if (includeParent) {
          menu = new MenuModel();
          Object.assign(menu, element);
          menu.Children = [];
          menu.Children[0] = child;
        }
        else menu = child;
        return;
      }
    });
    return menu;
  }

  public get notificationsValue(): Array<NotificationModel> {
    if (!this.authSubject.value) return this.authSubject.value;
    return this.authSubject.value.Notifications;
  }
  public get Roles(): Array<string> {
    if (!this.authSubject.value) return this.authSubject.value;
    return this.authSubject.value.Roles;
  }

  login(user: UserLogin) {
    let endpoint: string = environment.apiUrl + '/Account/Login';
    return this.http.post<AuthModel>(endpoint, { UserName: user.UserName, Password: user.Password })
      .pipe(map(auth => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem(this.authStorage, JSON.stringify(auth));
        this.authSubject.next(auth);
        if (user.Remember) this.setRemember(user);
        return auth;
      }));
  }

  public logout() {
    // remove user from local storage and set current user to null
    sessionStorage.removeItem(this.authStorage);
    this.authSubject.next(null!);
    this.router.navigateByUrl('/login');
  }

  private setRemember(user: UserLogin) {
    localStorage.setItem(this.rememberStorage, JSON.stringify(user));
  }

  public get rememberValue(): UserLogin {
    let result = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem(this.rememberStorage)!));
    if (!result.value) {
      return new UserLogin();
    }
    return result.value;
  }
}
