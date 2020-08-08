import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-appareils',
  templateUrl: './mes-appareils.component.html',
  styleUrls: ['./mes-appareils.component.sass']
})
export class MesAppareilsComponent implements OnInit {

  devicesTitle = 'Mes Appareils';
  updatedAt = new Date();

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

  onToutAllumer() {
    for (let device of this.devices) {
      device.status = 'allumer';
    }
  }

  onToutEteindre() {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
  }

  onSwitchOn(index) {
    this.devices[index].status = 'allumer';
  }

  onSwitchOff(index) {
    this.devices[index].status = 'éteint';
  }

}
