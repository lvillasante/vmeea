import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEolicaPageRoutingModule } from './modal-eolica-routing.module';

import { ModalEolicaPage } from './modal-eolica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEolicaPageRoutingModule
  ],
  declarations: [ModalEolicaPage]
})
export class ModalEolicaPageModule {}
