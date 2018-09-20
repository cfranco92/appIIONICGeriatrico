import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { CalendarModule } from 'ionic3-calendar-en';

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioPage),
    CalendarModule
  ],
})
export class CalendarioPageModule {}
