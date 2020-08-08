import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDeviceComponent } from "./new-device/new-device.component";
import { MesAppareilsComponent } from "./mes-appareils/mes-appareils.component";
import {EditDeviceComponent} from "./mes-appareils/edit-device/edit-device.component";
import {FourOFourComponent} from "./four-o-four/four-o-four.component";
import {SingleDeviceComponent} from "./single-device/single-device.component";
import {AuthGardService} from "./services/auth-gard.service";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'app-new-device', canActivate: [AuthGardService], component: NewDeviceComponent },
  { path: 'app-mes-appareils', canActivate: [AuthGardService], component: MesAppareilsComponent },
  { path: 'app-single-device/:id', canActivate: [AuthGardService], component: SingleDeviceComponent },
  { path: 'app-edit-device', canActivate: [AuthGardService], component: EditDeviceComponent },
  { path: 'app-login', component: LoginComponent},
  { path: '', component: LoginComponent },
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
