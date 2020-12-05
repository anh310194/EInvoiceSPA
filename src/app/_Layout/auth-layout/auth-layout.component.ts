import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from '../../_services/authenticate.service';
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(
    router: Router,
    authService: AuthenticateService) {
    if (authService.userValue) {
      router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    let existclass = body.classList.contains('login-page');
    if (!existclass) {
      body.classList.add('login-page');
    }
    if (body.classList.contains('sidebar-mini')) {
      body.classList.remove('sidebar-mini');
    }
  }

}
