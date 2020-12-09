import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserManagementResponse } from '../_responses/UserManagementResponse'
import { TableReponse } from '../_responses/TableReponse'
import { AuthenticateService } from './authenticate.service'
import { environment } from '../../environments/environment';
import { UserRequest } from '../_requests/UserRequest'
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

    // set Header include Authorization
    let headers = new HttpHeaders().set("Authorization", this.Authorization);
    let userRequest = new UserRequest();

    // call API to Server
    return this.httpClient
      .post<TableReponse<UserManagementResponse>>(endPoint, userRequest, { headers })
      .pipe(map(reponse => {
        return reponse;
      }));
  }


  GetParams<T>(obj: T): HttpParams {
    let resultParams = new HttpParams();
    if (!obj) {
      return resultParams;
    }
    let valuesT = Object.values(obj);
    Object.getOwnPropertyNames(obj).forEach((propertyName: string, index: number) => {
      let value: String = new String(valuesT[index]);
      resultParams.set(propertyName, value.toString());
    });
    return resultParams;
  }
}
