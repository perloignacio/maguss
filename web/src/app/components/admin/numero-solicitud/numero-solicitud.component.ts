import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumSolicService } from '@app/services/numSolic/num-solic.service';
import { SharedService } from '@app/services/shared/shared.service';

@Component({
  selector: 'app-numero-solicitud',
  templateUrl: './numero-solicitud.component.html',
  styleUrls: ['./numero-solicitud.component.scss']
})

export class NumeroSolicitudComponent {
 numero: string; 

  constructor(private router:Router,private srvShared:SharedService, private Activeroute:ActivatedRoute){
    this.Activeroute.params.subscribe(val => {
        
      this.numero=this.Activeroute.snapshot.params["numero"];
})

  }


}
