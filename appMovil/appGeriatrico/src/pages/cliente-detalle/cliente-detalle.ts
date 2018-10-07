import { ClienteService } from './../../services/clientes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClienteDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-detalle',
  templateUrl: 'cliente-detalle.html',
})
export class ClienteDetallePage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public crearClienteServices: ClienteService) {
    this.cliente = navParams.get('cliente') || {};
  }

  guardarCambios(){
    this.crearClienteServices.editCliente(this.cliente);    
    this.navCtrl.pop();
    console.log(this.cliente); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteDetallePage');
  }

}
