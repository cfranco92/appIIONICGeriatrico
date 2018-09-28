import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteDetallePage } from './cliente-detalle';

@NgModule({
  declarations: [
    ClienteDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteDetallePage),
  ],
})
export class ClienteDetallePageModule {}
