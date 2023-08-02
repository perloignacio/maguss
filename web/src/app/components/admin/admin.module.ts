import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { BuscarEquiposComponent } from './buscar-equipos/buscar-equipos.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { NumeroSolicitudComponent } from './numero-solicitud/numero-solicitud.component';
import { ActivasComponent } from './activas/activas.component';
@NgModule({
    declarations: [
    MainComponent,
    HomeComponent,
    SolicitudComponent,
    BuscarEquiposComponent,
    ResultadosBusquedaComponent,
    NumeroSolicitudComponent,
    ActivasComponent
  ],
    exports:[
      
    ],
    imports: [
      CommonModule,
      RouterModule,
      AdminRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      
    ],providers:[
      DatePipe
    ]
  })
  export class AdminModule { }