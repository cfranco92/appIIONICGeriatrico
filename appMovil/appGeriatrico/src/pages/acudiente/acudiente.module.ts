import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcudientePage } from './acudiente';

@NgModule({
  declarations: [
    AcudientePage,
  ],
  imports: [
    IonicPageModule.forChild(AcudientePage),
  ],
})
export class AcudientePageModule {}
