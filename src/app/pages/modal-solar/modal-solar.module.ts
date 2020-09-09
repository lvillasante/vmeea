import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSolarPageRoutingModule } from './modal-solar-routing.module';

import { ModalSolarPage } from './modal-solar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSolarPageRoutingModule
  ],
  declarations: [ModalSolarPage]
})
export class ModalSolarPageModule {}
