import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesAppareilsComponent } from './mes-appareils/mes-appareils.component';
import { DeviceService} from "./services/device.service";
import { NewDeviceComponent } from './new-device/new-device.component';
import {EditDeviceComponent} from "./mes-appareils/edit-device/edit-device.component";
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
import {AuthGardService} from "./services/auth-gard.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MesAppareilsComponent,
    EditDeviceComponent,
    NewDeviceComponent,
    FourOFourComponent,
    SingleDeviceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DeviceService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
