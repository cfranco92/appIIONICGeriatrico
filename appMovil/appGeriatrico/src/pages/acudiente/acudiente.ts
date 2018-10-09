import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosMedicosPage } from '../datos-medicos/datos-medicos';

/**
 * Generated class for the AcudientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acudiente',
  templateUrl: 'acudiente.html',
})
export class AcudientePage {
  cliente: any = {};
  parientes: any = [];
  contadorParientes: number = 0;
  boolContador: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente');    
  }

  agregarPariente() {
    console.log("agregado")
    this.boolContador = false;
    this.contadorParientes++;
    var nuevoPariente: any = {};
    nuevoPariente.contador = this.contadorParientes;
    this.parientes.push(nuevoPariente);        
  }

  copyArray() {    
    for (var i = 0; i < this.parientes.length; ++i)
    this.cliente.parientes[i] = this.parientes[i];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcudientePage');
  }
  irAVistaDatosMedicos(cliente) {
    this.copyArray();
    this.navCtrl.push(DatosMedicosPage, {cliente: cliente});
  }
}
