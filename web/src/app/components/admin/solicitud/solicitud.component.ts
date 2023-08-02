import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipos } from '@app/models/equipos';
import { Solicitudes } from '@app/models/solicitudes';
import { NumSolicService } from '@app/services/numSolic/num-solic.service';
import { SharedService } from '@app/services/shared/shared.service';
import { SolicitudesService } from '@app/services/solicitudes/solicitudes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent {
  equipos:Equipos;
  obj:Solicitudes=new Solicitudes();
  
  constructor(private router:Router, private srvObj:SolicitudesService, private srvShared:SharedService, private counterService: NumSolicService){
    this.equipos=this.srvShared.equipoSolicitud
  }
  
  guardar(){
    this.srvObj.PostSolicitud(this.obj).subscribe({
      next: (res)=>{
        if(res.statusCode==200){
          this.router.navigate(['admin/solicitud/'+res.data])
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
