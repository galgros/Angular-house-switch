import { Component, OnInit } from '@angular/core';

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

  devices = [
    {name: 'grille pain', status: 'éteint'},
    {name: 'télévision', status: 'éteint'},
    {name: 'four', status: 'éteint'},
  ];

  constructor() { }

  ngOnInit(): void {
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
    for (let device of this.devices) {
      device.status = 'allumer';
      this.onUpdate();
    }
  }

  onToutEteindre() {
    for (let device of this.devices) {
      device.status = 'éteint';
      this.onUpdate();
    }
  }

  onSwitchOn(index) {
    this.devices[index].status = 'allumer';
    this.onUpdate();
  }

  onSwitchOff(index) {
    this.devices[index].status = 'éteint';
    this.onUpdate();
  }

  isDisabled(index) {
    if (this.devices[index].status === 'éteint') {
      return false;
    }
    return true;
  }

}
