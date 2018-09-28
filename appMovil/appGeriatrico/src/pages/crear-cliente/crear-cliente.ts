import { Camera, CameraOptions } from '@ionic-native/camera';
import { AcudientePage } from './../acudiente/acudiente';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cliente',
  templateUrl: 'crear-cliente.html',
})
export class CrearClientePage {
  cliente: any = {};  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
      this.cliente = navParams.get('cliente') || {};
      this.cliente.acudiente= {};
      this.cliente.parientes={pariente1: {},pariente2: {}}
      this.cliente.medico = {};
      this.cliente.seguros = {};
      this.cliente.observaciones = {};      
  }
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  
  
  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  irAVistaAcudiente(cliente){
    this.navCtrl.push(AcudientePage, {cliente: cliente});
  }

}
