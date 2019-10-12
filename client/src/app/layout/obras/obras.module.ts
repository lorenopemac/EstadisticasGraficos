import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Prime NG
import {AccordionModule} from 'primeng/primeng';
import { SharedModule, ButtonModule, PanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/components/table/table';
import { DropdownModule } from 'primeng/dropdown';

// Services
import { ObrasRoutingModule } from './obras-routing.module';
import { ObrasComponent } from './obras.component';
import { PageHeaderModule } from '../../shared';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AcuerdosComponent } from './acuerdos/acuerdos.component';
import { MapaComponent } from './mapa/mapa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
    imports: [
        CommonModule,
        DropdownModule,
        FormsModule,
        AccordionModule,
        ButtonModule,
        PanelModule,
        SharedModule,
        DataTableModule,
        TableModule,
        PageHeaderModule,
        
        ObrasRoutingModule
    ],
    declarations: [
        ObrasComponent,
        ProyectosComponent,
        AcuerdosComponent,
        MapaComponent
    ],
    providers: [
        Location
    ]
})
export class ObrasModule {}
