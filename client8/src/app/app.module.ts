import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoTortaComponent } from './components/grafico-torta/grafico-torta.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDispersionComponent } from './components/grafico-dispersion/grafico-dispersion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ObraEstadoComponent } from './pages/obrasEstado/obraEstado.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent} from './pages/dashboard/dashboard.component'
import { HomeComponent} from './pages/home/home.component';
import { ActividadObrasComponent } from './components/actividad-obras/actividad-obras.component';
import { TablaActividadesComponent } from './components/tabla-actividades/tabla-actividades.component';
import { TablaNuevasObrasComponent } from './components/tabla-nuevas-obras/tabla-nuevas-obras.component';
import { ObrasEstadoComponent } from './components/obras-estado/obras-estado.component'
import {MatOptionModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { TablaObraEstadosComponent } from './components/tabla-obra-estados/tabla-obra-estados.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ObraDashboardComponent } from './pages/obraDashboard/obraDashboard.component';
import { FichaObraComponent } from './components/ficha-obra/ficha-obra.component';
import { TablaActividadObraComponent } from './components/tabla-actividad-obra/tabla-actividad-obra.component';
import { ObraBusquedaComponent } from './pages/obraBusqueda/obraBusqueda.component';
import { GraficoLineaTiempoComponent } from './components/grafico-linea-tiempo/grafico-linea-tiempo.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficoTortaComponent,
    GraficoBarraComponent,
    GraficoDispersionComponent,
    DashboardComponent,
    HomeComponent,
    NavBarComponent,
    ActividadObrasComponent,
    TablaActividadesComponent,
    TablaNuevasObrasComponent,
    ObraEstadoComponent,
    ObrasEstadoComponent,
    TablesComponent,
    ObraDashboardComponent,
    TablaObraEstadosComponent,
    FichaObraComponent,
    TablaActividadObraComponent,
    ObraBusquedaComponent,
    GraficoLineaTiempoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    FormsModule, 
    MatOptionModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
