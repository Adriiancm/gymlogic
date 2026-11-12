
import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { settingsOutline, barbellOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink
  ]
})
export class HeaderComponent {

  constructor() {
    addIcons({ settingsOutline, barbellOutline });
  }

}
