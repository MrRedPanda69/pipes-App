import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumsComponent } from './ventas/pages/nums/nums.component';
import { PipesPersonalizados } from './ventas/pages/ordenar/pipes-personalizados.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'numeros',
    component: NumsComponent
  },
  {
    path: 'pipes-personalizados',
    component: PipesPersonalizados
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule { }
