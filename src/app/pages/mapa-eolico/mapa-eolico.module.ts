import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEolicoPageRoutingModule } from './mapa-eolico-routing.module';

import { MapaEolicoPage } from './mapa-eolico.page';

import { ModalEolicaPage } from '../modal-eolica/modal-eolica.page';
import { ModalEolicaPageModule } from '../modal-eolica/modal-eolica.module';

import { ModalLeyendasPage } from '../modal-leyendas/modal-leyendas.page';
import { ModalLeyendasPageModule } from '../modal-leyendas/modal-leyendas.module';

@NgModule({
	entryComponents:[
		ModalEolicaPage	
	],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEolicoPageRoutingModule,
    ModalEolicaPageModule,
    ModalLeyendasPageModule
  ],
  declarations: [MapaEolicoPage]
})
export class MapaEolicoPageModule {}
