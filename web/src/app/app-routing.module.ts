import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canLoad: [ AuthGuard ],
    canActivate:[AuthGuard],

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
