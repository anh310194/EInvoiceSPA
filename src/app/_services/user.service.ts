import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { UserManagement } from '../_models/User'
import { AuthenticateService } from './authenticate.service'
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  Authorization: string;
  constructor(AthService: AuthenticateService, private httpClient: HttpClient) {
    this.Authorization = AthService.AuthorizationValue;
  }

  GetUserList() {
    let endPoint = environment.apiUrl + '/User/UserList';
    let result: Array<UserManagement> = [];

    // set Header include Authorization
    let httpHeaders = new HttpHeaders({"Authorization": this.Authorization });

    // call API to Server
    return this.httpClient.get<Array<UserManagement>>(endPoint, { headers: httpHeaders })
      .pipe(map(reponse => {
        debugger
        return reponse;
      }));
  }
}
