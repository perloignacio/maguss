import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumSolicService {
  numeroSolicitud: number=0;

  constructor() { }

  incrementarNum(): void {
    this.numeroSolicitud++;
  }

  getNumero(): number {
    return this.numeroSolicitud;
  }
}
