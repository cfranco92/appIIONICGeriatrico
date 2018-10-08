import { DBCRUDService } from './../../services/DBCRUDService.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicamentoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicamento-detalle',
  templateUrl: 'medicamento-detalle.html',
})
export class MedicamentoDetallePage {
  medicamento: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public crudDB: DBCRUDService) {
    this.medicamento = navParams.get('medicamento') || {};
  }

  guardarCambios(){
    var path: string = '/inventario/medicamentos/' + this.medicamento.id; 
    this.crudDB.edit(path, this.medicamento);    
    this.navCtrl.pop();
    console.log(this.medicamento); 
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentoDetallePage');
  }

}
