import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
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
  // La revisión de datos queda en acudiente.html (sin revisar)
  cliente: any = {
    acudientes : {
      acudientePrincipal : {
        apellido1 : " ",
        apellido2 : " ",
        cedula : " ",
        nombre1 : " ",
        nombre2 : " ",
        parentesco : " "
      },
      acudienteSecundario : {
        apellido1 : " ",
        apellido2 : " ",
        cedula : " ",
        nombre1 : " ",
        nombre2 : " ",
        parentesco : " "
      }
    },
    apellido1 : " ",
    apellido2 : " ",
    documentoIdentidad : " ",
    edad : " ",
    estadoCivil : " ",
    fechaNacimiento : " ",
    foto : " ",
    fotoDocumentoIdentidad : " ",
    genero : " ",
    id : " ",
    medicamentos : {
      dosisMedicamento1 : " ",
      dosisMedicamento2 : " ",
      dosisMedicamento3 : " ",
      dosisMedicamento4 : " ",
      fotoMedicamento1 : " ",
      horarioMedicamento1 : " ",
      horarioMedicamento2 : " ",
      horarioMedicamento3 : " ",
      horarioMedicamento4 : " ",
      medicoTratante : " ",
      nombreMedicamento1 : " ",
      nombreMedicamento2 : " ",
      nombreMedicamento3 : " ",
      nombreMedicamento4 : " ",
      viaMedicamento1 : " ",
      viaMedicamento2 : " ",
      viaMedicamento3 : " ",
      viaMedicamento4 : " "
    },
    medico : {
      antecedentes : {
        alergias : {
          medicamentos : " ",
          medico : " ",
          otros : " "
        },
        cognitivos : {
          cambiosMemoria : " ",
          descripcion : " "
        },
        familiar : {
          PerdidaReciente : " ",
          enfermedad1 : " ",
          enfermedad2 : " ",
          parentescoEnfermedad1 : " ",
          parentescoEnfermedad2 : " "
        },
        fisicos : {
          detalleCronicas : " ",
          enfermedades : " ",
          euclu : " ",
          fisicosCronicasSINO : " ",
          tiempoCronicas : " ",
          tratamientoCronicas : " "
        },
        psicologicosPsiquiatricos : {
          contactoMedico : " ",
          diagnostico : " ",
          nombreApellidosMedico : " ",
          tratamiento : " "
        },
        traumas : {
          otrosTrauma : " ",
          quienTrauma : " ",
          suceso : " ",
          tiempoTrauma : " "
        }
      },
      apellido1 : " ",
      apellido2 : " ",
      direccionConsultorio : " ",
      email : " ",
      especialidad : " ",
      nombre1 : " ",
      nombre2 : " ",
      tel1 : " ",
      tel2 : " "
    },
    nombre1 : " ",
    nombre2 : " ",
    observaciones : {
      salidas : " ",
      visitas : " "
    },
    parientes : {
      pariente1 : {
        apellido1 : " ",
        cedula : " ",
        email : " ",
        nombre1 : " ",
        nombre2 : " ",
        parentesco : " ",
        tel1 : " ",
        tel2 : " "
      }
    },
    seguros : {
      asistenciaMedica : " ",
      eps : " ",
      funerariaTel : " ",
      funerarios : " ",
      prepagada : " "
    },
    tipoDocumentoIdentidad : " "
  };
  ref: AngularFireStorageReference;  
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  progress: any;  // Observable 0 to 100
  image: string; // base64
  url: Observable<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private storage: AngularFireStorage) {      
      if(!this.cliente.id) {
        this.cliente.id = Date.now();        
      }              
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
    const task = this.ref.putString(this.image, 'data_url').then(() => {      
      this.ref.getDownloadURL().subscribe(url => {                
        this.downloadURL = url;
        this.cliente.foto = this.downloadURL;
        alert("Foto cargada con éxito en la base de datos")        
      })
    }); 
  }
  createUploadTask2(file: string, path: string) {
    const filePath = `${path}`;
    this.ref = this.storage.ref(filePath);
    this.image = 'data:image/jpg;base64,' + file;
    alert("Cargando foto en la base de datos");
    const task = this.ref.putString(this.image, 'data_url').then(() => {      
      this.ref.getDownloadURL().subscribe(url => {                                
        this.downloadURL = url;
        this.cliente.fotoDocumentoIdentidad = this.downloadURL;
        alert("Foto cargada con éxito en la base de datos");
      })
    }); 
  }

  async uploadHandler() {
   const base64 = await this.takePhoto();
   const pathFotoUsuario: string = `usuarios/${this.cliente.id}/fotoUsuario.jpg`;
   this.createUploadTask(base64, pathFotoUsuario);      
  }
  async uploadHandlerDocumentoIdentidad() {
    const base64 = await this.takePhoto();
    const pathDocumentoUsuario: string = `usuarios/${this.cliente.id}/fotoDocumentoUsuario.jpg`;
    this.createUploadTask2(base64, pathDocumentoUsuario);    
  }

  obtenerEdad(): void {
    const today: Date = new Date();
    const birthDate: Date = new Date(this.cliente.fechaNacimiento);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.cliente.edad = age;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  irAVistaAcudiente(cliente) {    
    this.navCtrl.push(AcudientePage, {cliente: cliente});
  }

}
