import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntecedentesUsuarioPage } from './antecedentes-usuario';

@NgModule({
  declarations: [
    AntecedentesUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AntecedentesUsuarioPage),
  ],
})
export class AntecedentesUsuarioPageModule {}
