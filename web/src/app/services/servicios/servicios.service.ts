import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios } from '@app/models/servicios';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.apiUrl+"/admin/";
  }

  GetServicios() {
    return this.http.get<any>(this.endpoint+'serviciosUser');
  }

  
}

