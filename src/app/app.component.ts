import {Component, OnInit} from '@angular/core';
import {Observable, interval} from "rxjs";
import {AuthGardService} from "./services/auth-gard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'G-App';
  darkMode = false;
  secondes: number;

  constructor(private authGard: AuthGardService, private router: Router) {

  }

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    )
  }

  onLogout() {
    this.authGard.isAuth = false;
    this.authGard.user= "";
    this.router.navigate(['/app-login'])
  }

  onDarkMode() {
    if (this.darkMode === false) {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
    return this.darkMode;
  }

  isDarkMode(element: string) {
    switch (element) {
      case 'nav':
        if (this.darkMode === true) {
          return 'navbar-dark bg-dark';
        }
        return 'navbar-light bg-light';
      case 'main' :
        if (this.darkMode === true) {
          return 'darkmode';
        }
        return 'lightmode';
    }
  }

  getUser() {
    return this.authGard.user
  }

  getAuth() {
    return this.authGard.isAuth
  }
}
