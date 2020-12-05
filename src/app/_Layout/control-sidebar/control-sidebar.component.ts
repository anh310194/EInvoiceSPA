import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../../_services/authenticate.service';

@Component({
  selector: 'app-control-sidebar',
  templateUrl: './control-sidebar.component.html',
  styleUrls: ['./control-sidebar.component.scss']
})
export class ControlSidebarComponent implements OnInit {

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.authService.logout();
  }
}
