import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLeyendasPage } from './modal-leyendas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLeyendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLeyendasPageRoutingModule {}
