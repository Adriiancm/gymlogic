import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private darkMode = true;

  constructor() {
    this.aplicarTema();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(enable: boolean): void {
    this.darkMode = enable;
    this.aplicarTema();
  }

  toggleDarkMode(): void {
    this.setDarkMode(!this.darkMode);
  }

  private aplicarTema(): void {
    document.body.classList.toggle('dark', this.darkMode);
  }
}