import { AcudientePage } from './../acudiente/acudiente';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cliente',
  templateUrl: 'crear-cliente.html',
})
export class CrearClientePage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.cliente = navParams.get('cliente') || {};
      this.cliente.acudiente= {};
      this.cliente.parientes={pariente1: {},pariente2: {}}
      this.cliente.medico = {};
      this.cliente.seguros = {};
      this.cliente.observaciones = {}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  irAVistaAcudiente(cliente){
    this.navCtrl.push(AcudientePage, {cliente: cliente});
  }

}
