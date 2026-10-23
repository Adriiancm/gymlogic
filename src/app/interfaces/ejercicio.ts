export interface Ejercicio {
  id: number;
  nombre: string;
  grupoMuscular: string;
  dificultad: 'Principiante' | 'Intermedio' | 'Avanzado';
  descripcion: string;
  favorito: boolean;
  fechaRegistro: string;
}
