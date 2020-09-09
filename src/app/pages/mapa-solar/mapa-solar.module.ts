import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaSolarPageRoutingModule } from './mapa-solar-routing.module';

import { MapaSolarPage } from './mapa-solar.page';

import { ModalSolarPage } from '../modal-solar/modal-solar.page';
import { ModalSolarPageModule } from '../modal-solar/modal-solar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaSolarPageRoutingModule,
    ModalSolarPageModule
  ],
  declarations: [MapaSolarPage]
})
export class MapaSolarPageModule {}
