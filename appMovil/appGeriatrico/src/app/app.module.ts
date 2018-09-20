import { PersonalService } from './../services/personal.service';
import { ListaPersonalPage } from './../pages/lista-personal/lista-personal';
import { CrearPersonalPage } from './../pages/crear-personal/crear-personal';
import { CrearClientePage } from './../pages/crear-cliente/crear-cliente';
import { TabsHomePage } from './../pages/tabs-home/tabs-home';
import { NotificacionesPage } from './../pages/notificaciones/notificaciones';
import { GestionPage } from './../pages/gestion/gestion';
import { CalendarioPage } from './../pages/calendario/calendario';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Imports Firebase auth, DatabaseModule, Module
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

//Servicios
import { ClienteService } from '../services/clientes.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCuz4z9xA3fVthF35qAXCcUtUJ3clhXPww",
  authDomain: "appgeriatrico.firebaseapp.com",
  databaseURL: "https://appgeriatrico.firebaseio.com",
  projectId: "appgeriatrico",
  storageBucket: "appgeriatrico.appspot.com",
  messagingSenderId: "590157339784"
}

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaClientesPage } from '../pages/lista-clientes/lista-clientes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsHomePage,
    CalendarioPage,
    GestionPage,
    NotificacionesPage,
    CrearClientePage,
    ListaClientesPage,
    CrearPersonalPage,
    ListaPersonalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsHomePage,
    CalendarioPage,
    GestionPage,
    NotificacionesPage,
    CrearClientePage,
    ListaClientesPage,
    CrearPersonalPage,
    ListaPersonalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteService,
    PersonalService
  ]
})
export class AppModule {}
