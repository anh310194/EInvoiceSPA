import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from "rxjs/operators";

import { AuthenticateService } from '../_services/authenticate.service';
import { UserLogin } from '../_models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  isHidden: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthenticateService
  ) {
    this.isHidden = false;
    let userLogin = authService.rememberValue;
    this.loginForm = this.formBuilder.group({
      username: [userLogin.UserName, Validators.required],
      password: [userLogin.Password, Validators.required],
      remember: [userLogin.Remember]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void { }

  // convenience getter for easy access to form fields
  getUserLogin(): UserLogin {
    let userLogin: UserLogin = new UserLogin();
    userLogin.UserName = this.loginForm.controls.username.value;
    userLogin.Password = this.loginForm.controls.password.value;
    userLogin.Remember = this.loginForm.controls.remember.value;
    userLogin.Language = "En";
    return userLogin;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.isHidden = true;
    this.authService.login(this.getUserLogin()).pipe(first())
      .subscribe(
        data => {
          this.isHidden = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.isHidden = false;
        }
      );
  }
}
