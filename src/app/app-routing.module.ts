import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDeviceComponent } from "./new-device/new-device.component";
import { MesAppareilsComponent } from "./mes-appareils/mes-appareils.component";
import {EditDeviceComponent} from "./mes-appareils/edit-device/edit-device.component";
import {FourOFourComponent} from "./four-o-four/four-o-four.component";
import {SingleDeviceComponent} from "./single-device/single-device.component";

const routes: Routes = [
  { path: 'app-new-device', component: NewDeviceComponent },
  { path: 'app-mes-appareils', component: MesAppareilsComponent },
  { path: 'app-single-device/:id', component: SingleDeviceComponent },
  { path: 'app-edit-device', component: EditDeviceComponent },
  { path: '', component: MesAppareilsComponent },
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
