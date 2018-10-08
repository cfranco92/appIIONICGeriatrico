import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearMedicamentoPage } from '../crear-medicamento/crear-medicamento';

/**
 * Generated class for the AgregarInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-inventario',
  templateUrl: 'agregar-inventario.html',
})
export class AgregarInventarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irAVistaCrearMedicamento() {
    this.navCtrl.push(CrearMedicamentoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarInventarioPage');
  }

}
