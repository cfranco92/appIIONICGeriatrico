import { ClienteService } from './../../services/clientes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-clientes',
  templateUrl: 'lista-clientes.html',
})
export class ListaClientesPage {
  clientes: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService) {
    this.clienteService.getClientes().valueChanges()
    .subscribe((clientesDB) => {
          this.clientes = clientesDB;
        })    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaClientesPage');
  }
  deleteCliente(cliente) {
    if(confirm('Seguro que desea borrar este cliente?')) {
      this.clienteService.deleteCliente(cliente)
      .then( ()=> {
        alert('Cliente eliminado correctamente');
      });
    }    
  }

}
