import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentoDetallePage } from './medicamento-detalle';

@NgModule({
  declarations: [
    MedicamentoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicamentoDetallePage),
  ],
})
export class MedicamentoDetallePageModule {}
