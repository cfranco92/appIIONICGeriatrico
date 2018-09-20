import { PersonalService } from './../../services/personal.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {
  notificaciones: any = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public personalService: PersonalService) {
    this.personalService.getNotificaciones().valueChanges()
    .subscribe((notificacionesDB) => {
          this.notificaciones = notificacionesDB;
        })   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
  }
}
