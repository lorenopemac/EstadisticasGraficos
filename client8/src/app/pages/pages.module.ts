import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
    imports: [
        CommonModule,
        PagesComponent,
        PagesRoutingModule
    ],
    declarations: [PagesComponent ]
})
export class PagesModule {}
