import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { BuscarEquiposComponent } from './buscar-equipos/buscar-equipos.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { NumeroSolicitudComponent } from './numero-solicitud/numero-solicitud.component';
import { ActivasComponent } from './activas/activas.component';

    const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children:[
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'solicitud',
          component: SolicitudComponent,
        },
        {
          path:'solicitud/:numero',
          component: NumeroSolicitudComponent,
        },
        {
          path: 'buscar',
          component: BuscarEquiposComponent,
        },
        {
          path: 'resultados',
          component: ResultadosBusquedaComponent,
        },
        {
          path: 'activas',
          component: ActivasComponent,
        },
      ]
    }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }