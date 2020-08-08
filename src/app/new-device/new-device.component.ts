import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";
import {count} from "rxjs/operators";

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
    return this.deviceService.devices.push({id: this.deviceService.devices.length + 1,name: this.newDevice, status: 'éteint'})
  }

}
