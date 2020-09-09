import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSolarPage } from './modal-solar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSolarPageRoutingModule {}
