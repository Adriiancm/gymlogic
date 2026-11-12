
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  barbellOutline,
  settingsOutline,
  heart,
  heartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() {
    addIcons({
      barbellOutline,
      settingsOutline,
      heart,
      heartOutline
    });
  }

}
