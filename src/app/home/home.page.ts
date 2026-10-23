
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

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
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    EjercicioItemComponent
  ]
})
export class HomePage {

  constructor() {
    addIcons({ addOutline });
  }

  listaDeEjercicios: Ejercicio[] = [
    {
      id: 1,
      nombre: 'Press de banca',
      grupoMuscular: 'Pecho',
      dificultad: 'Intermedio',
      descripcion: 'Ejercicio para trabajar el pecho.',
      favorito: true,
      fechaRegistro: '2026-10-12',
    },
    {
      id: 2,
      nombre: 'Sentadillas',
      grupoMuscular: 'Piernas',
      dificultad: 'Intermedio',
      descripcion: 'Ejercicio para trabajar las piernas.',
      favorito: false,
      fechaRegistro: '2026-10-12',
    },
    {
      id: 3,
      nombre: 'Curl de bíceps',
      grupoMuscular: 'Brazos',
      dificultad: 'Principiante',
      descripcion: 'Ejercicio para trabajar los bíceps.',
      favorito: true,
      fechaRegistro: '2026-10-12',
    },
    {
      id: 4,
      nombre: 'Peso muerto',
      grupoMuscular: 'Espalda y piernas',
      dificultad: 'Avanzado',
      descripcion: 'Trabaja la espalda y los glúteos.',
      favorito: false,
      fechaRegistro: '2026-10-23',
    },
    {
      id: 5,
      nombre: 'Press militar',
      grupoMuscular: 'Hombros',
      dificultad: 'Intermedio',
      descripcion: 'Fortalece los hombros y los tríceps.',
      favorito: false,
      fechaRegistro: '2026-10-23',
    },
    {
      id: 6,
      nombre: 'Jalón al pecho',
      grupoMuscular: 'Espalda',
      dificultad: 'Principiante',
      descripcion: 'Ejercicio para trabajar los dorsales.',
      favorito: false,
      fechaRegistro: '2026-10-23',
    },
    {
      id: 7,
      nombre: 'Extensiones de tríceps',
      grupoMuscular: 'Brazos',
      dificultad: 'Principiante',
      descripcion: 'Fortalece los músculos del tríceps.',
      favorito: false,
      fechaRegistro: '2026-10-23',
    },
    {
      id: 8,
      nombre: 'Elevaciones laterales',
      grupoMuscular: 'Hombros',
      dificultad: 'Principiante',
      descripcion: 'Trabaja la parte lateral de los hombros.',
      favorito: false,
      fechaRegistro: '2026-10-23',
    }
  ];

  anadirEjercicio() {
    console.log('Botón Añadir ejercicio pulsado');
  }

}
