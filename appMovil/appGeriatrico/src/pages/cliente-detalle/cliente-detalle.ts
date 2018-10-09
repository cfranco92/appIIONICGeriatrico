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
  parientes: any = [];
  medicamentos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public crearClienteServices: ClienteService) {
    this.cliente = navParams.get('cliente') || {};
    this.getMedicamentos();
    this.getParientes();    
  }

  getParientes(){
    for (var i = 0; i < this.cliente.parientes.length; ++i){
      this.parientes[i] = this.cliente.parientes[i];
    }        
  }

  getMedicamentos() {
    for (var j = 0; j < this.cliente.medicamentos.length; ++j){
      this.medicamentos[j] = this.cliente.medicamentos[j];
    }    
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
