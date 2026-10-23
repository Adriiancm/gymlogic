import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonButton
} from '@ionic/angular';

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
    IonButton
  ]
})
export class EjercicioItemComponent {
  @Input() ejercicio!: Ejercicio;

  alternarFavorito(): void {
    this.ejercicio.favorito = !this.ejercicio.favorito;
  }
}
