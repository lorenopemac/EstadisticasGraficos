import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { DashboardComponent} from './pages/dashboard/dashboard.component'
//import { AppComponent } from './app.component'
import { HomeComponent} from './pages/home/home.component'


const routes: Routes = [
  /*{ path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
  { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' },*/
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
