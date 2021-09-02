import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nameLower: string = 'jorge';
  nameUpper: string = 'JORGE';
  fullName: string = 'Jorge Loredo';

  fecha: Date = new Date();  // 08/24/2021
}
