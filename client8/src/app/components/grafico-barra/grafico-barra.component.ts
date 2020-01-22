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
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },
        series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 320
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

      }
      Highcharts.chart('containerProyecto', options);
    }
  }