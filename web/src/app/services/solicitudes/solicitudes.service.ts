import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.apiUrl+"/admin/";
  }

  PostSolicitud(form:any) {
    return this.http.post<any>(this.endpoint+'solicitudes',form);
  }

  ListarSolicitudes(){
    return this.http.get<any>(this.endpoint+'solicitudes');
  }

}
