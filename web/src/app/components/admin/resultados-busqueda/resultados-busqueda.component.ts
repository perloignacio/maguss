import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipos } from '@app/models/equipos';
import { SharedService } from '@app/services/shared/shared.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent {
  equipos:Equipos[];
  constructor(private router:Router,private srvShared:SharedService){
    if(this.srvShared.equiposBusqueda.length==0){
      this.buscar();
    }else{
      this.equipos=this.srvShared.equiposBusqueda;
    }
  }

  buscar(){
    this.router.navigate(["admin/buscar"])
  }

  seleccionar(eq:Equipos){
    this.srvShared.equipoSolicitud=eq;
    this.router.navigate(["admin/solicitud"])
  }
}
