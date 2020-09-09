import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSolarPage } from './info-solar.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoSolarPageRoutingModule {}
