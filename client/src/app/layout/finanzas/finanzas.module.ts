import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './finanzas-routing.module';
import { FormComponent } from './finanzas.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule],
    declarations: [FormComponent]
})
export class FormModule {}
