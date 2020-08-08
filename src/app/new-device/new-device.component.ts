import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

  newDevice = "";

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.deviceService.devices.push({name: this.newDevice, status: 'éteint'})
  }

}
