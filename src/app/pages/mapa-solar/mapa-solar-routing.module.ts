import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaSolarPage } from './mapa-solar.page';

const routes: Routes = [
  {
    path: '',
    component: MapaSolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaSolarPageRoutingModule {}
