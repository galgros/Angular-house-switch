import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";

@Component({
  selector: 'app-mes-appareils',
  templateUrl: './mes-appareils.component.html',
  styleUrls: ['./mes-appareils.component.sass']
})
export class MesAppareilsComponent implements OnInit {

  devicesTitle = 'Mes Appareils';

  updatedAt = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  devices = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.devices = this.deviceService.devices
  }

  getColor(device) {
    if (device === 'éteint') {
      return "red";
    } else {
      return 'green';
    }
  }

  getClass(device) {
    if (device === 'éteint') {
      return "list-group-item-danger";
    } else {
      return 'list-group-item-success';
    }
  }

  onUpdate() {
    this.updatedAt = new Promise(
      (resolve, reject) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          }, 1000
        );
      }
    );
  }

  onToutAllumer() {
    this.devices = this.deviceService.onToutAllumer()
    this.onUpdate();
  }

  onToutEteindre() {
    this.devices = this.deviceService.onToutEteindre()
    this.onUpdate();
  }

  onSwitch(index) {
    this.devices = this.deviceService.onSwitch(index)
    this.onUpdate();
  }

  isDisabled(index) {
    if (this.devices[index].status === 'éteint') {
      return false;
    }
    return true;
  }

}
