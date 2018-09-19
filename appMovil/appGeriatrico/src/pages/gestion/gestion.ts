import { ListaPersonalPage } from './../lista-personal/lista-personal';
import { CrearPersonalPage } from './../crear-personal/crear-personal';
import { ListaClientesPage } from './../lista-clientes/lista-clientes';
import { CrearClientePage } from './../crear-cliente/crear-cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion',
  templateUrl: 'gestion.html',
})
export class GestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionPage');
  }
  irAVistaCrearCliente() {
    this.navCtrl.push(CrearClientePage);
  }
  irAVistaListaClientes() {
    this.navCtrl.push(ListaClientesPage);
  }
  irAVistaCrearPersonal() {
    this.navCtrl.push(CrearPersonalPage);
  }
  irAVistaListaPersonal() {
    this.navCtrl.push(ListaPersonalPage);
  }
  
}
