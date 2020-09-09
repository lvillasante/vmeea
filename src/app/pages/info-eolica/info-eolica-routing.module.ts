import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoEolicaPage } from './info-eolica.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoEolicaPageRoutingModule {}
