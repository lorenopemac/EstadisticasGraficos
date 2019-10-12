import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObrasComponent } from './obras.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AcuerdosComponent } from './acuerdos/acuerdos.component';
import { MapaComponent } from './mapa/mapa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
    {path: '',component: ObrasComponent},
    { path: 'proyectos',  component: ProyectosComponent},
    { path: 'acuerdos',  component: AcuerdosComponent},
    { path: 'mapa',  component: MapaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObrasRoutingModule {
}
