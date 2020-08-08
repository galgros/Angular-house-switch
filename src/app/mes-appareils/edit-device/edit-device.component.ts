import {Component, OnInit} from "@angular/core";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})

export class EditDeviceComponent implements OnInit {

  index = null;
  newName = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
