import { Component } from '@angular/core';
import {DeviceService} from "./services/device.service";
import {element} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'G-App';
  darkMode = false;

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
}
