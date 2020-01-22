import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RouterLink, Router } from '@angular/router';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

 //Within your component
 let self;

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);

@Component({
  selector: 'grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnInit {

  constructor( private router: Router) {
    self = this; // Assign outer context to self
  }
  
    ngOnInit(){
      let dataVivienda =[{"name":"Iniciada","id":"8","y":60},{"name":"Ejecución","id":"9","y":10},{"name":"Finalizada","id":"11","y":16},{"name":"Entregada","id":"12","y":14}];
      let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
      //let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
      //let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
      
      this.graficoProyecto(dataProyecto);
    }
  
    graficoProyecto(dataVivienda) {
      let options: any = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          backgroundColor: "#E0E0E0",
          type: 'line'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
              valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            size: 120,
            skipKeyboardNavigation:true,
            borderWidth: 4,
              dataLabels: {
                enabled: true,
                format: '{point.y}',
                distance: 5,
                style: {
                    fontSize:'12px',
                }
              },
              showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: dataVivienda
        }]
      }
      Highcharts.chart('containerProyecto', options);
    }
  }