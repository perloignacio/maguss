import { Injectable } from '@angular/core';
import { Equipos } from '@app/models/equipos';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  equiposBusqueda:Equipos[]=[]
  equipoSolicitud:Equipos;
  constructor() { }
}
