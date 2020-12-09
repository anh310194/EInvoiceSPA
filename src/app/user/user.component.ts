import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";

import { UserManagementResponse } from '../_responses/UserManagementResponse'
import { TableReponse } from '../_responses/TableReponse'
import { UserService } from '../_services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  tableReponse!: TableReponse<UserManagementResponse>;
  isHidden: boolean = false;

  constructor(private userService: UserService) {
    this.tableReponse = new TableReponse<UserManagementResponse>();
    this.LoadBodyTable();
  }

  ngOnInit(): void {
  }

  LoadBodyTable() {
    this.isHidden = true;
    this.userService.GetUserList().pipe(first())
      .subscribe(
        data => {
          this.tableReponse = data;
          this.isHidden = false;
        },
        error => {
          this.isHidden = false;
        }
      );
  }
}
