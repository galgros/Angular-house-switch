export class DeviceService {
  devices = [
    {name: 'grille pain', status: 'éteint'},
    {name: 'télévision', status: 'éteint'},
    {name: 'four', status: 'éteint'},
  ];

  onToutAllumer() {
    for (let device of this.devices) {
      device.status = 'allumer';
    }
    return this.devices;
  }

  onToutEteindre() {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
    return this.devices;
  }

  onSwitch(index) {
    if (this.devices[index].status === 'allumer') {
      this.devices[index].status = 'éteint'
    } else {
      this.devices[index].status = 'allumer'
    }
    return this.devices;
  }
}
