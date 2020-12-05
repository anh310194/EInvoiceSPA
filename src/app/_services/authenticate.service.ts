import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

import { User } from '../_models/User'
import { AuthModel, MenuModel, NotificationModel } from '../_models/AuthModel'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private authStorage = "authentication";
  private authSubject: BehaviorSubject<AuthModel>;
  public auth: Observable<AuthModel>;
  private user! : User;
  private menu!: MenuModel;
  private notifications!: Array<NotificationModel>;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.authSubject = new BehaviorSubject<AuthModel>(JSON.parse(localStorage.getItem(this.authStorage)!));
    this.auth = this.authSubject.asObservable();
    if(this.authSubject.value){
      this.user = this.authSubject.value.UserProfile;
      this.menu = this.authSubject.value.Menu;
      this.notifications = this.authSubject.value.Notifications;
    }
  }

  public get userValue(): User {
    return this.user; 
  }
  public get menuValue(): MenuModel {
    return this.menu; 
  }
  public get notificationsValue(): Array<NotificationModel> {
    return this.notifications; 
  }


  login(username: any, password: any) {
    let endpoint: string = environment.apiUrl + '/Account/Login';
    return this.http.post<AuthModel>(endpoint, { UserName: username, Password: password })
      .pipe(map(auth => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(this.authStorage, JSON.stringify(auth));
        this.authSubject.next(auth);
        return auth;
      }));
  }

  public logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(this.authStorage);
    this.authSubject.next(null!);
    this.router.navigate(['/login']);
  }
}
