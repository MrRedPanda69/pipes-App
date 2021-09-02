import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect
  nameP: string = 'Gandalf';
  sex: string = 'masculino';
  invMap = {
    'masculino': 'invitado',
    'femenino': 'invitada'
  }

  // i18nPlural
  miembros: string[] = ['Frodo', 'Aragorn', 'Legolas', 'Gimli', 'Gandalf'];
  miembrosMap = {
    '=0': 'no hay voluntarios para ir a Mordor',
    '=1': 'tenemos un voluntario para ir a Mordor',
    '=2': 'tenemos 2 voluntarios para ir a Mordor',
    'other': 'tenemos # voluntarios para ir a Mordor'
  }

  cambiarPersonaje() {
    this.nameP = 'Galandriel';
    this.sex = 'femenino';
  }

  borrarPersonaje() {
    this.miembros.pop();
  }

  // keyValue Pipe
  persona = {
    direccion: 'Nuevo Leon, Mexico',
    edad: 22,
    nombre: 'Jorge',
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe 
  miObservable = interval(1000);   // 0, 1, 2, 3

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
  
}
