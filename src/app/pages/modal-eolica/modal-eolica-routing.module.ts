import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEolicaPage } from './modal-eolica.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEolicaPageRoutingModule {}
