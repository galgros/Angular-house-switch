import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthGardService} from "../services/auth-gard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authGard: AuthGardService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ''
    });
  }

  onSubmit(name) {
    this.authGard.user = name;
    this.authGard.isAuth = true;
    this.router.navigate(['/app-mes-appareils']);
  }
}
