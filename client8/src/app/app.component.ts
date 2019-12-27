import { Component } from '@angular/core';
import { GraficoTortaComponent } from './components/grafico-torta/grafico-torta.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client8';
}
