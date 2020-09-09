import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLeyendasPageRoutingModule } from './modal-leyendas-routing.module';

import { ModalLeyendasPage } from './modal-leyendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLeyendasPageRoutingModule
  ],
  declarations: [ModalLeyendasPage]
})
export class ModalLeyendasPageModule {}
