
import { PersonalService } from '../../services/personal.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-personal',
  templateUrl: 'crear-personal.html',
})
export class CrearPersonalPage {
  personal: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public crearPersonalServices: PersonalService) {
      this.personal = navParams.get('personal') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPersonalPage');
  }
  guardarPersonal() {
    if(!this.personal.id) {
      this.personal.id = Date.now();
    }    
    this.crearPersonalServices.createPersonal(this.personal);
    this.navCtrl.pop();
    console.log(this.personal);    
  }

}
