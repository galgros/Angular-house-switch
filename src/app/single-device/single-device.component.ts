import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  deviceName = "name";
  deviceStatus = "status";
  id = null;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = +id;
    this.deviceName = this.deviceService.getDeviceById(+id).name;
    this.deviceStatus = this.deviceService.getDeviceById(+id).status;
  }

  onSwitch() {
    if (this.deviceStatus === 'éteint') {
      this.deviceStatus = "allumé";
      this.deviceService.getDeviceById(this.id).status = "allumé"
    } else {
      this.deviceStatus = "éteint";
      this.deviceService.getDeviceById(this.id).status = "éteint"
    }
  }

  getColor(status: string) {
    if (status === 'éteint') {
      return "red";
    } else {
      return 'green';
    }
  }

  onSubmit() {
    this.deviceService.getDeviceById(this.id).name = this.deviceName;
  }

}
