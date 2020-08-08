import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesAppareilsComponent } from './mes-appareils/mes-appareils.component';
import { DeviceService} from "./services/device.service";
import { NewDeviceComponent } from './new-device/new-device.component';
import {EditDeviceComponent} from "./mes-appareils/edit-device/edit-device.component";

@NgModule({
  declarations: [
    AppComponent,
    MesAppareilsComponent,
    EditDeviceComponent,
    NewDeviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
