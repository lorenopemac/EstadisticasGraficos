import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RouterLink, Router } from '@angular/router';



declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Timeline = require("highcharts/modules/timeline.js");
let Exporting = require("highcharts/modules/exporting.js");
let  Accessibility= require("highcharts/modules/accessibility.js");

 //Within your component
 let self;

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
Timeline(Highcharts);
Exporting(Highcharts);
Accessibility(Highcharts);

@Component({
  selector: 'grafico-linea-tiempo',
  templateUrl: './grafico-linea-tiempo.component.html',
  styleUrls: ['./grafico-linea-tiempo.component.css']
})


export class GraficoLineaTiempoComponent implements OnInit {

  constructor( private router: Router) {
    self = this; // Assign outer context to self
  }
  
    ngOnInit(){
      let dataVivienda =[{"name":"Iniciada","id":"8","y":60},{"name":"Ejecución","id":"9","y":10},{"name":"Finalizada","id":"11","y":16},{"name":"Entregada","id":"12","y":14}];
      let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
      
      this.graficoProyecto(dataProyecto);
    }
  
/**GRAFICO DE CURVA DE AVANCES */
    graficoProyecto(dataVivienda) {
      let options: any = {
        chart: {
          plotBackgroundColor: "#ecf2fa",
          backgroundColor: "#ecf2fa",
          plotBorderWidth: null,
          plotShadow: false,
          type: 'timeline'
        },
    xAxis: {
        visible: true
    },
    yAxis: {
        visible: false
    },
    title: {
        text: ' 90 viviendas e infraestructura de Neuquén Capital Sector A '
    },
    subtitle: {
        text: 'Hechos Relevantes'
    },
    colors: [
        '#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'
    ],
    series: [{
        data: [{
            name: 'Pedido de Financiamiento',
            label: '2017: Ingreso de información',
            description: 'Se realiza el pedido de financiamiento al organismo'
        }, {
            name: 'LLamado a Licitación',
            label: '2018: Licitación de obra',
            description: 'Se realiza pedido de la licitación Nro: 3719'
        }, {
            name: 'Licitación',
            label: '2019: Licitacion de obra a empresa Zoppi Hnos.',
            description: 'Licitacion efectiva'
        }, {
            name: 'Acuerdo',
            label: '2019:Acuerdo realizado con nacion',
            description: 'Firma de acuerdo Nro°: 2019-123456'
        }, {
            name: 'Contrato',
            label: '2020: Firma de contrato entre el organismo y empresa',
            description: 'Firma de contrato, asignación de montos y tiempos'
        }, {
            name: 'Inicio de Obra',
            label: '2020: Inicio de obra, certificación',
            description: 'Certificación y pago de avances.'
        }]
    }]
    }
      Highcharts.chart('containerLinea', options);
    }
}
