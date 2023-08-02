import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipos } from '@app/models/equipos';
import { SharedService } from '@app/services/shared/shared.service';

@Component({
  selector: 'app-activas',
  templateUrl: './activas.component.html',
  styleUrls: ['./activas.component.scss']
})
export class ActivasComponent {
  equipos:Equipos[];
  constructor(private router:Router,private srvShared:SharedService){
    this.equipos=this.srvShared.equiposBusqueda;
  }


}
