import { MedicamentosPage } from './../medicamentos/medicamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FamiliarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familiar-usuario',
  templateUrl: 'familiar-usuario.html',
})
export class FamiliarUsuarioPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente');
    console.log("Help")
    console.log(this.cliente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamiliarUsuarioPage');
  }
  irAVistaMedicamentos(cliente) {
    this.navCtrl.push(MedicamentosPage, {cliente: cliente});
  }
}
