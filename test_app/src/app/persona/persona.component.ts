import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  /* Atributos */
  nombre: string = 'Bellamy';
  apellido: string = 'Blake';
  edad: number = 30  
}
