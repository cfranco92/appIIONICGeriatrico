import { NotificacionesPage } from './../notificaciones/notificaciones';
import { GestionPage } from './../gestion/gestion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';

/**
 * Generated class for the TabsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-home',
  templateUrl: 'tabs-home.html',
})
export class TabsHomePage {
  tab1Root = CalendarioPage;
  tab2Root = GestionPage;
  tabAbout = NotificacionesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsHomePage');
  }

}
