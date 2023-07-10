import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.apiUrl+"/admin/";
  }

  GetEquipos(filter:any) {
    return this.http.post<any>(this.endpoint+'equipos',filter);
  }

}
