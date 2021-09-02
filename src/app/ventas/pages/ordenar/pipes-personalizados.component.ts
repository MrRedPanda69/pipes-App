import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styles: [
  ]
})
export class PipesPersonalizados {

  enMayus: boolean = true;
  
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Green Arrow',
      vuela: false,
      color: Color.verde
    }
  ];

  constructor() { }

  mayusClick() {
    this.enMayus = !this.enMayus;
  }

  cambiarOrden(value: string) {
    this.orderBy = value;
  }
}
