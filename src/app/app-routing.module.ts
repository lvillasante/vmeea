import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./pages/portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'info-eolica',
    loadChildren: () => import('./pages/info-eolica/info-eolica.module').then( m => m.InfoEolicaPageModule)
  },
  {
    path: 'mapa-eolico',
    loadChildren: () => import('./pages/mapa-eolico/mapa-eolico.module').then( m => m.MapaEolicoPageModule)
  },
  {
    path: 'modal-eolica',
    loadChildren: () => import('./pages/modal-eolica/modal-eolica.module').then( m => m.ModalEolicaPageModule)
  },
  {
    path: 'mapa-solar',
    loadChildren: () => import('./pages/mapa-solar/mapa-solar.module').then( m => m.MapaSolarPageModule)
  },
  {
    path: 'info-solar',
    loadChildren: () => import('./pages/info-solar/info-solar.module').then( m => m.InfoSolarPageModule)
  },
  {
    path: 'modal-solar',
    loadChildren: () => import('./pages/modal-solar/modal-solar.module').then( m => m.ModalSolarPageModule)
  },
  {
    path: 'modal-leyendas',
    loadChildren: () => import('./pages/modal-leyendas/modal-leyendas.module').then( m => m.ModalLeyendasPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./pages/acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'reporte-weibull',
    loadChildren: () => import('./pages/reporte-weibull/reporte-weibull.module').then( m => m.ReporteWeibullPageModule)
  },
  {
    path: 'reporte-rosa',
    loadChildren: () => import('./pages/reporte-rosa/reporte-rosa.module').then( m => m.ReporteRosaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
