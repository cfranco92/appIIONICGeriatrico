import { ClienteService } from './../../services/clientes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestriccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restricciones',
  templateUrl: 'restricciones.html',
})
export class RestriccionesPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public crearClienteServices: ClienteService) {
    this.cliente = navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestriccionesPage');
  }
  guardarClienteVolverHome() {
    if(!this.cliente.id) {
      this.cliente.id = Date.now();
    }    
    this.crearClienteServices.createCliente(this.cliente);
    this.navCtrl.pop();
    console.log(this.cliente);    
  }
}
