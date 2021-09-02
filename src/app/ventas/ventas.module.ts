import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumsComponent } from './pages/nums/nums.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { PipesPersonalizados } from './pages/ordenar/pipes-personalizados.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';



@NgModule({
  declarations: [
    // Components 
    NoComunesComponent,
    NumsComponent,
    BasicosComponent,
    PipesPersonalizados,

    // Pipes
    MayusculasPipe,
    OrdenarPipe,
    VuelaPipe
  ],
  exports: [
    NoComunesComponent,
    NumsComponent,
    BasicosComponent,
    PipesPersonalizados
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
