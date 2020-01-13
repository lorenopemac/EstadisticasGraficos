import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            // Rediccionamiento
            { path: '', redirectTo: '/usuarios', pathMatch: 'full' },

            // Ruta dirrecionando a un COMPONENTE
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            //{ path: 'obras', loadChildren: './obras/obras.module#ObrasModule' },
            { path: 'obraEstado', loadChildren: './dashboard/dashboard.module#obrasEstadoModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
