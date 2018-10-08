import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarInventarioPage } from './agregar-inventario';

@NgModule({
  declarations: [
    AgregarInventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarInventarioPage),
  ],
})
export class AgregarInventarioPageModule {}
