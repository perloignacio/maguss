import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '@app/models/usuarios';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Usuarios>;
  public currentUser: Observable<Usuarios>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Usuarios>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuarios {

      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/login`, { usuario:username,contra:password })
          .pipe(map(res => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              if(res.data!=null){
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                this.currentUserSubject.next(res.data);
                return res.data;
              }

          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
