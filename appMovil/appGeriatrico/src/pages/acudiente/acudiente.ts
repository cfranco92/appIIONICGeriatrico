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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcudientePage');
  }
  irAVistaDatosMedicos(cliente) {
    this.navCtrl.push(DatosMedicosPage, {cliente: cliente});
  }
  crearFamiliar(nombre1: string, nombre2: string, apellido1: string, 
    apellido2: string, parentesco: string, tel1: number, 
    tel2: number, email: string): any{
      
  }
}
