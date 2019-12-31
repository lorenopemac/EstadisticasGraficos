import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GraficoTortaComponent } from './components/grafico-torta/grafico-torta.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDispersionComponent } from './components/grafico-dispersion/grafico-dispersion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatCardModule, MatButtonModule} from '@angular/material';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { DashboardComponent} from './pages/dashboard/dashboard.component'
import { HomeComponent} from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GraficoTortaComponent,
    GraficoBarraComponent,
    GraficoDispersionComponent,
    DashboardComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    MatCardModule, MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
