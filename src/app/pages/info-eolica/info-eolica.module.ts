import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoEolicaPageRoutingModule } from './info-eolica-routing.module';

import { InfoEolicaPage } from './info-eolica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoEolicaPageRoutingModule
  ],
  declarations: [InfoEolicaPage]
})
export class InfoEolicaPageModule {}
