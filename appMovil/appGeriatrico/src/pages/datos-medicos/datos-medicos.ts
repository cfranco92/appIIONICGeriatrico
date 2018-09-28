import { RestriccionesPage } from './../restricciones/restricciones';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatosMedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-medicos',
  templateUrl: 'datos-medicos.html',
})
export class DatosMedicosPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosMedicosPage');
  }
  irAVistaRestricciones(cliente) {
    this.navCtrl.push(RestriccionesPage, {cliente: cliente});
  }
}
