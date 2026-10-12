
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';

import { Ejercicio } from '../interfaces/ejercicio';
import { EjercicioItemComponent } from '../components/ejercicio-item/ejercicio-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    EjercicioItemComponent
  ]
})
export class HomePage {
  listaDeEjercicios: Ejercicio[] = [
    {
      id: 1,
      nombre: 'Press de banca',
      grupoMuscular: 'Pecho',
      dificultad: 'Intermedio',
      descripcion: 'Ejercicio para trabajar el pecho.',
      favorito: true,
      fechaRegistro: '2026-10-12'
    },
    {
      id: 2,
      nombre: 'Sentadillas',
      grupoMuscular: 'Piernas',
      dificultad: 'Intermedio',
      descripcion: 'Ejercicio para trabajar las piernas.',
      favorito: false,
      fechaRegistro: '2026-10-12'
    },
    {
      id: 3,
      nombre: 'Curl de bíceps',
      grupoMuscular: 'Brazos',
      dificultad: 'Principiante',
      descripcion: 'Ejercicio para trabajar los bíceps.',
      favorito: true,
      fechaRegistro: '2026-10-12'
    }
  ];
}
