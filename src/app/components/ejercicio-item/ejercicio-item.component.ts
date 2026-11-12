
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonButton,
  IonIcon,
  IonImg
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

import { Ejercicio } from '../../interfaces/ejercicio';

@Component({
  selector: 'app-ejercicio-item',
  templateUrl: './ejercicio-item.component.html',
  styleUrls: ['./ejercicio-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonItem,
    IonLabel,
    IonCardContent,
    IonButton,
    IonIcon,
    IonImg
  ]
})
export class EjercicioItemComponent {

  @Input() ejercicio: Ejercicio | undefined;

  constructor() {
    addIcons({ heart, heartOutline });
  }

  alternarFavorito(): void {
    if (this.ejercicio) {
      this.ejercicio.favorito = !this.ejercicio.favorito;
    }
  }
}
