export class DeviceService {
  devices = [
    {id: 1, name: 'grille pain', status: 'éteint'},
    {id: 2, name: 'télévision', status: 'éteint'},
    {id: 3, name: 'four', status: 'éteint'},
    {id: 4, name: 'google home', status: 'éteint'},
  ];

  onToutAllumer() {
    for (let device of this.devices) {
      device.status = 'allumé';
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
    if (this.devices[index].status === 'allumé') {
      this.devices[index].status = 'éteint'
    } else {
      this.devices[index].status = 'allumé'
    }
    return this.devices;
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }
}
