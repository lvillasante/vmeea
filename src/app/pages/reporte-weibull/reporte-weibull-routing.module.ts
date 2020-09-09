import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteWeibullPage } from './reporte-weibull.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteWeibullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteWeibullPageRoutingModule {}
