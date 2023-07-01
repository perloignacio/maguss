import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }
    
    canLoad(route: Route): boolean {
        let url: string = route.path;
       
        if (this.authenticationService.currentUserValue) {
            return true;
        }else{
          this.router.navigate([ '/login']);
          return false;
        }
    
      }
    
      canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        if (this.authenticationService.currentUserValue) {
            return true;
        }else{
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
    
    
      }

    
}
