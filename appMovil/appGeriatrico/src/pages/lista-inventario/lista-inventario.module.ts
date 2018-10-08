import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaInventarioPage } from './lista-inventario';

@NgModule({
  declarations: [
    ListaInventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaInventarioPage),
  ],
})
export class ListaInventarioPageModule {}
