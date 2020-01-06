import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
   // {path: '',component: ObrasComponent},
  //  { path: 'proyectos',  component: ProyectosComponent},
   // { path: 'dashboard',  component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GraficoTorataRoutingModule {
}
