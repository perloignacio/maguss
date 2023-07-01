import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario:string;
  contra:string;
  
  constructor(private authenticationService:AuthenticationService,private route:Router){

  }
  enviar() {
    
    this.authenticationService.login(this.usuario,this.contra).subscribe({
      next: (band)=>{
        if(band){
          this.route.navigate(['admin/home'])
        }
      },
      error:(err)=>{
        
        Swal.fire("Upps",err.error.error.description,'warning');
      }
    })
  }
}
