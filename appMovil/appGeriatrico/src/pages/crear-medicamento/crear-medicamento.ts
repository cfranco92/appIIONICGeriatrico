import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { DBCRUDService } from './../../services/DBCRUDService.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearMedicamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-medicamento',
  templateUrl: 'crear-medicamento.html',
})
export class CrearMedicamentoPage {
  medicamento: any = {
    nombreGenerico: " ",
    nombreComercial: " ",
    foto: " ",
    presentacion: " ",
    concentracion: " ",
    cantidad: " ",
    concentracionCantidad: " ",
    laboratorio: " ",
    lote: " ",
    fechaVencimiento: " "
  };
  pathMedicamentos: string = '/inventario/medicamentos/';
  ref: AngularFireStorageReference;  
  downloadURL: Observable<string>;
  image: string; // base64
  constructor(public navCtrl: NavController, public navParams: NavParams, public crudDB: DBCRUDService, private camera: Camera, private storage: AngularFireStorage) {     
    if(!this.medicamento.id) {
      this.medicamento.id = Date.now();        
    }
  }

  guardarMedicamentoVolverHome() {            
    var path: string = this.pathMedicamentos + this.medicamento.id;
    this.crudDB.create(path, this.medicamento);    
    this.navCtrl.popToRoot();
    console.log(this.medicamento); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearMedicamentoPage');
  }

  async uploadHandler() {
   const base64 = await this.takePhoto();
   const pathFotoMedicamento: string = `inventario/medicamentos/${this.medicamento.id}/fotoMedicamento.jpg`;
   this.createUploadTask(base64, pathFotoMedicamento);      
  }
  async takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    return await this.camera.getPicture(options)
  }

  createUploadTask(file: string, path: string) {
    const filePath = `${path}`;
    this.ref = this.storage.ref(filePath);
    this.image = 'data:image/jpg;base64,' + file;
    alert("Cargando foto en la base de datos");
    this.ref.putString(this.image, 'data_url').then(() => {      
      this.ref.getDownloadURL().subscribe(url => {                
        this.downloadURL = url;
        this.medicamento.foto = this.downloadURL;
        alert("Foto cargada con éxito en la base de datos")        
      })
    }); 
  }

}
