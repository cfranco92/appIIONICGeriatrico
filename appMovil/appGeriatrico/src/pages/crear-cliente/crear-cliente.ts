import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
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
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  progress: any;  // Observable 0 to 100
  image: string; // base64
  url: Observable<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private storage: AngularFireStorage) {
      this.cliente = navParams.get('cliente') || {};
      this.cliente.acudiente= {};
      this.cliente.parientes={pariente1: {},pariente2: {}}
      this.cliente.medico = {};
      this.cliente.seguros = {};
      this.cliente.observaciones = {};             
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    return await this.camera.getPicture(options)
  }

  // createUploadTask(file: string): void {
  //   const filePath = `usuarios/usuario_${ new Date().getTime() }.jpg`;
  //   this.image = 'data:image/jpg;base64,' + file;
  //   this.task = this.storage.ref(filePath).putString(this.image, 'data_url');

  //   this.progress = this.task.percentageChanges();
  // }

  createUploadTask(file: string) {
    const filePath = `usuarios/usuario_${ new Date().getTime() }.jpg`;
    this.ref = this.storage.ref(filePath);
    this.image = 'data:image/jpg;base64,' + file;
    alert("Cargando foto en la base de datos");
    const task = this.ref.putString(this.image, 'data_url').then(() => {      
      this.ref.getDownloadURL().subscribe(url => {        
        this.downloadURL = url;
        this.cliente.foto = this.downloadURL;
        alert("Foto cargada con éxito en la base de datos")
      })
    });
    // this.uploadProgress = this.task.percentageChanges();   
     
  }

  async uploadHandler() {
   const base64 = await this.takePhoto();
   this.createUploadTask(base64);   
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  irAVistaAcudiente(cliente){
    this.cliente.foto = this.downloadURL;
    this.navCtrl.push(AcudientePage, {cliente: cliente});
  }

}
