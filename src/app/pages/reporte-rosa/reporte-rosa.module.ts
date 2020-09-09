import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteRosaPageRoutingModule } from './reporte-rosa-routing.module';

import { ReporteRosaPage } from './reporte-rosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteRosaPageRoutingModule
  ],
  declarations: [ReporteRosaPage]
})
export class ReporteRosaPageModule {}
