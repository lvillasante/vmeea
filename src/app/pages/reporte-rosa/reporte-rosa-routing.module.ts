import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteRosaPage } from './reporte-rosa.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteRosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteRosaPageRoutingModule {}
