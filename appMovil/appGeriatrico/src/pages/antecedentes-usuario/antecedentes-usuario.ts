import { FamiliarUsuarioPage } from './../familiar-usuario/familiar-usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AntecedentesUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-antecedentes-usuario',
  templateUrl: 'antecedentes-usuario.html',
})
export class AntecedentesUsuarioPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {      
    this.cliente = navParams.get('cliente');
    console.log("estamos en antecedentes")
    console.log(this.cliente)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntecedentesUsuarioPage');
  }
  irAVistaFamiliar(cliente){
    this.navCtrl.push(FamiliarUsuarioPage,{cliente: cliente});
  }
}
