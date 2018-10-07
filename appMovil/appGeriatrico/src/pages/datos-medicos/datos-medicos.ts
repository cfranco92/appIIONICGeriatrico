import { AntecedentesUsuarioPage } from './../antecedentes-usuario/antecedentes-usuario';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatosMedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-medicos',
  templateUrl: 'datos-medicos.html',
})
export class DatosMedicosPage {
  cliente: any = {};
  ref: AngularFireStorageReference;  
  downloadURL: Observable<string>;
  image: string; // base64
  boolVisitas: boolean = false;
  boolSalidas: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private storage: AngularFireStorage) {      
    this.cliente = navParams.get('cliente');
    console.log(this.cliente);
  }
  async uploadHandler() {
    const base64 = await this.takePhoto();
    const pathFotoUsuario: string = `usuarios/${this.cliente.id}/fotoCarnetAsistenciaMedica.jpg`;
    this.createUploadTask(base64, pathFotoUsuario);   
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
  createUploadTask(file: string, path: string): void {
    const filePath = `${path}`;
    this.ref = this.storage.ref(filePath);
    this.image = 'data:image/jpg;base64,' + file;
    alert("Cargando foto en la base de datos");
    const task = this.ref.putString(this.image, 'data_url').then(() => {      
      this.ref.getDownloadURL().subscribe(url => {        
        this.downloadURL = url;
        this.cliente.seguros.fotoCarnetAsistenciaMedica = this.downloadURL;
        alert("Foto cargada con éxito en la base de datos")
      })
    }); 
  }

  changeBoolVisitas(){
    if (this.cliente.observaciones.visitas == "Si"){
      this.boolVisitas = true;
    } else{
      this.boolVisitas = false;
    }
  }

  changeBoolSalidas(){
    if(this.cliente.observaciones.salidas == "Si"){
      this.boolSalidas = true;
    } else{
      this.boolSalidas = false;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosMedicosPage');
  }
  // irAVistaRestricciones(cliente) {
  //   this.navCtrl.push(RestriccionesPage, {cliente: cliente});
  // }
  irAvistaAntecedentes(cliente) {
    this.navCtrl.push(AntecedentesUsuarioPage, {cliente: cliente});
  }
}
