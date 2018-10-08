import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearMedicamentoPage } from './crear-medicamento';

@NgModule({
  declarations: [
    CrearMedicamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearMedicamentoPage),
  ],
})
export class CrearMedicamentoPageModule {}
