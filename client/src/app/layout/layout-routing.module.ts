import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // Rediccionamiento
            { path: '', redirectTo: '/usuarios', pathMatch: 'full' },

            // Ruta dirrecionando a un COMPONENTE
            { path: 'usuarios', loadChildren: './usuarios/usuarios.module#DashboardModule' },
            { path: 'obras', loadChildren: './obras/obras.module#ObrasModule' },
            { path: 'finanzas', loadChildren: './finanzas/finanzas.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
