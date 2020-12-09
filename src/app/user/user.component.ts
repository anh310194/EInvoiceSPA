import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";

import { UserManagement } from '../_models/User';
import { UserService } from '../_services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  UserList: Array<UserManagement> = [];
  constructor(private userService: UserService) {
   
   }

  ngOnInit(): void {
    this.LoadBodyTable();
  }

  LoadBodyTable(){
    this.userService.GetUserList().pipe(first())
    .subscribe(
      data=>{
        this.UserList = data;
      },
      error=>{
      }
    );
  }
}
