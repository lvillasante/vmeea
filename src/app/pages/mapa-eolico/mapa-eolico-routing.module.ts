import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaEolicoPage } from './mapa-eolico.page';

const routes: Routes = [
  {
    path: '',
    component: MapaEolicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaEolicoPageRoutingModule {}
