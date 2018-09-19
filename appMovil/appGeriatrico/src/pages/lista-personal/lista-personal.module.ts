import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPersonalPage } from './lista-personal';

@NgModule({
  declarations: [
    ListaPersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPersonalPage),
  ],
})
export class ListaPersonalPageModule {}
