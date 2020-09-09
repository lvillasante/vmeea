import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSolarPageRoutingModule } from './info-solar-routing.module';

import { InfoSolarPage } from './info-solar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoSolarPageRoutingModule
  ],
  declarations: [InfoSolarPage]
})
export class InfoSolarPageModule {}
