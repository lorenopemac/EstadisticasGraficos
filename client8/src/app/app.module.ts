import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GraficoTortaComponent } from './components/grafico-torta/grafico-torta.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDispersionComponent } from './components/grafico-dispersion/grafico-dispersion.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GraficoTortaComponent,
    GraficoBarraComponent,
    GraficoDispersionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
