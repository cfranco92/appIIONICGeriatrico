import { DBCRUDService } from './../../services/DBCRUDService.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicamentoDetallePage } from '../medicamento-detalle/medicamento-detalle';

/**
 * Generated class for the ListaInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-inventario',
  templateUrl: 'lista-inventario.html',
})
export class ListaInventarioPage {
  medicamentos: any = [];
  pathMedicamentos: string = "/inventario/medicamentos/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public crudDB: DBCRUDService) {
    this.crudDB.getList(this.pathMedicamentos).valueChanges()
    .subscribe((medicamentosDB) => {
          this.medicamentos = medicamentosDB;
        }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaInventarioPage');
  }

  irAVistaDeDetalleExistente(medicamento) {
    this.navCtrl.push(MedicamentoDetallePage, {medicamento: medicamento});
  }
  deleteMedicamento(medicamento) {
    if(confirm('¿Seguro que desea borrar este medicamento?')) {
      var path: string = "/inventario/medicamentos/" + medicamento.id;
      this.crudDB.delete(path)
      .then( ()=> {
        alert('Medicamento eliminado correctamente');
      });
    }    
  }

}
