
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

import { Ejercicio } from '../interfaces/ejercicio';
import { EjercicioItemComponent } from '../components/ejercicio-item/ejercicio-item.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    EjercicioItemComponent,
    HeaderComponent
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
      imagen: 'assets/ejercicios/pressbanca.jpg'
    },
    {
      id: 2,
      nombre: 'Sentadillas',
      grupoMuscular: 'Piernas',
      dificultad: 'Intermedio',
      descripcion: 'Ejercicio para trabajar las piernas.',
      favorito: false,
      fechaRegistro: '2026-10-12',
      imagen: 'assets/ejercicios/sentadilla.jpg'
    },
    {
      id: 3,
      nombre: 'Curl de bíceps',
      grupoMuscular: 'Brazos',
      dificultad: 'Principiante',
      descripcion: 'Ejercicio para trabajar los bíceps.',
      favorito: true,
      fechaRegistro: '2026-10-12',
      imagen: 'assets/ejercicios/curlbiceps.jpg'
    },
    {
      id: 4,
      nombre: 'Peso muerto',
      grupoMuscular: 'Espalda y piernas',
      dificultad: 'Avanzado',
      descripcion: 'Trabaja la espalda y los glúteos.',
      favorito: false,
      fechaRegistro: '2026-10-23',
      imagen: 'assets/ejercicios/peso muerto.jpg'
    },
    {
      id: 5,
      nombre: 'Press militar',
      grupoMuscular: 'Hombros',
      dificultad: 'Intermedio',
      descripcion: 'Fortalece los hombros y los tríceps.',
      favorito: false,
      fechaRegistro: '2026-10-23',
      imagen: 'assets/ejercicios/press militar.jpg'
    },
    {
      id: 6,
      nombre: 'Jalón al pecho',
      grupoMuscular: 'Espalda',
      dificultad: 'Principiante',
      descripcion: 'Ejercicio para trabajar los dorsales.',
      favorito: false,
      fechaRegistro: '2026-10-23',
      imagen: 'assets/ejercicios/jalonalpecho.jpg'
    },
    {
      id: 7,
      nombre: 'Extensiones de tríceps',
      grupoMuscular: 'Brazos',
      dificultad: 'Principiante',
      descripcion: 'Fortalece los músculos del tríceps.',
      favorito: false,
      fechaRegistro: '2026-10-23',
      imagen: 'assets/ejercicios/extensiondetriceps.jpg'
    },
    {
      id: 8,
      nombre: 'Elevaciones laterales',
      grupoMuscular: 'Hombros',
      dificultad: 'Principiante',
      descripcion: 'Trabaja la parte lateral de los hombros.',
      favorito: false,
      fechaRegistro: '2026-10-23',
      imagen: 'assets/ejercicios/elevacioneslaterales.jpg'
    }
  ];

  nuevoEjercicio: Ejercicio = {
    id: 0,
    nombre: '',
    grupoMuscular: '',
    dificultad: 'Principiante',
    descripcion: '',
    favorito: false,
    fechaRegistro: new Date().toISOString().slice(0, 10),
    imagen: 'assets/ejercicios/pressbanca.jpg'
  };

  agregarEjercicio(): void {

    if (
      !this.nuevoEjercicio.nombre.trim() ||
      !this.nuevoEjercicio.grupoMuscular
    ) {
      return;
    }

    const imagenes: { [grupo: string]: string } = {
      'Pecho': 'assets/ejercicios/pressbanca.jpg',
      'Piernas': 'assets/ejercicios/sentadilla.jpg',
      'Brazos': 'assets/ejercicios/curlbiceps.jpg',
      'Espalda': 'assets/ejercicios/jalonalpecho.jpg',
      'Hombros': 'assets/ejercicios/press militar.jpg',
      'Espalda y piernas': 'assets/ejercicios/peso muerto.jpg'
    };

    const ejercicio: Ejercicio = {
      ...this.nuevoEjercicio,
      id: Date.now(),
      imagen: imagenes[this.nuevoEjercicio.grupoMuscular] ||
        'assets/ejercicios/pressbanca.jpg'
    };

    this.listaDeEjercicios.unshift(ejercicio);

    this.nuevoEjercicio = {
      id: 0,
      nombre: '',
      grupoMuscular: '',
      dificultad: 'Principiante',
      descripcion: '',
      favorito: false,
      fechaRegistro: new Date().toISOString().slice(0, 10),
      imagen: 'assets/ejercicios/pressbanca.jpg'
    };
  }

}
