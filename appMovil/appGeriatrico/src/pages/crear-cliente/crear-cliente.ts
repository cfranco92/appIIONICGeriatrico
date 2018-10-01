import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
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
  task: AngularFireUploadTask;

  progress: any;  // Observable 0 to 100

  image: string; // base64
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

  createUploadTask(file: string): void {
    const filePath = `my-pet-crocodile_${ new Date().getTime() }.jpg`;
    this.image = 'data:image/jpg;base64,' + file;
    this.task = this.storage.ref(filePath).putString(this.image, 'data_url');

    this.progress = this.task.percentageChanges();
  }

  async uploadHandler() {
   const base64 = await this.takePhoto();
   this.createUploadTask(base64);
  }
  
  
  
  // takePhoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     // targetHeight:,
  //     // targetWidth:,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     let file = 'data:image/jpeg;base64,' + imageData;      

  //     // const file = imageData.target.files[0];
  //     const filePath = 'usuarios' + this.cliente.nombre;
  //     const fileRef = this.storage.ref(filePath);
  //     const task = this.storage.upload(filePath, file);
      
  //     // get notified when the download URL is available
  //     task.snapshotChanges().pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.cliente.foto = fileRef.getDownloadURL();
  //       })
  //     )
  //     .subscribe()
  //    }, (err) => {
  //     // Handle error
  //    });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  irAVistaAcudiente(cliente){
    this.navCtrl.push(AcudientePage, {cliente: cliente});
  }

}
