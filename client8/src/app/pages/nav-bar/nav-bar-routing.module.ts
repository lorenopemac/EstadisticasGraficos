import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
   // {path: '',component: ObrasComponent},
  //  { path: 'proyectos',  component: ProyectosComponent},
   // { path: 'dashboard',  component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavBarRoutingModule {
}
