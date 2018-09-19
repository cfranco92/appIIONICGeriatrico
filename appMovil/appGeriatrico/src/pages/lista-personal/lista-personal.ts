import { PersonalService } from './../../services/personal.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-personal',
  templateUrl: 'lista-personal.html',
})
export class ListaPersonalPage {
  personal: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public personalService: PersonalService) {
    this.personalService.getPersonal().valueChanges()
    .subscribe((personalDB) => {
          this.personal = personalDB;
        })    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPersonalPage');
  }
  deletePersonal(personal) {
    if(confirm('Seguro que desea borrar este personal?')) {
      this.personalService.deletePersonal(personal)
      .then( ()=> {
        alert('Personal eliminado correctamente');
      });
    }    
  }
}
