import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosMedicosPage } from './datos-medicos';

@NgModule({
  declarations: [
    DatosMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosMedicosPage),
  ],
})
export class DatosMedicosPageModule {}
