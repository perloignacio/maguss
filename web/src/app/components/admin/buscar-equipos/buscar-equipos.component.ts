import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipos } from '@app/models/equipos';
import { Servicios } from '@app/models/servicios';
import { EquiposService } from '@app/services/equipos/equipos.service';
import { ServiciosService } from '@app/services/servicios/servicios.service';
import { SharedService } from '@app/services/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-equipos',
  templateUrl: './buscar-equipos.component.html',
  styleUrls: ['./buscar-equipos.component.scss']
})
export class BuscarEquiposComponent {
  servicio:string="";
  servicios:Servicios[]=[];
  nroserie:string="";
  codinterno:string="";
  equipos:Equipos[]=[];
  equipo:string="";
  constructor(private router:Router,private srvServicios:ServiciosService,private srvEquipos:EquiposService,private srvShared:SharedService){
    this.srvServicios.GetServicios().subscribe({
      next: (res)=>{
        if(res.statusCode==200){
          this.servicios=res.data;
        }else{
          Swal.fire("Upps",res.data,'warning');
        }
      },
      error:(err)=>{
        Swal.fire("Upps",err.error.error.description,'warning');
      }
    })

    this.srvEquipos.GetEquipos(null).subscribe({
      next: (res)=>{
        if(res.statusCode==200){
          this.equipos=res.data;
        }else{
          Swal.fire("Upps",res.data,'warning');
        }
      },
      error:(err)=>{
        Swal.fire("Upps",err.error.error.description,'warning');
      }
    })
  }
  
  home(){
    this.router.navigate(["admin/home"])
  }

  buscar(){
    if(this.equipo=="" && this.servicio=="" && this.codinterno=="" && this.nroserie==""){
      Swal.fire("Upps","Debe indicar al menos 1 filtro",'warning');
    }else{
      let objBuscar:any={"servicio":this.servicio,"nro_serie":this.nroserie,"codigo_interno":this.codinterno,"equipo":this.equipo};
      this.srvEquipos.GetEquipos(objBuscar).subscribe({
        next: (res)=>{
          if(res.statusCode==200){
            this.srvShared.equiposBusqueda=res.data;
            this.router.navigate(['admin/resultados'])
          }else{
            Swal.fire("Upps",res.data,'warning');
          }
        },
        error:(err)=>{
          Swal.fire("Upps",err.error.error.description,'warning');
        }
      })
    }
  }

}
