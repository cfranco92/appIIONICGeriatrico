import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearPersonalPage } from './crear-personal';

@NgModule({
  declarations: [
    CrearPersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearPersonalPage),
  ],
})
export class CrearPersonalPageModule {}
