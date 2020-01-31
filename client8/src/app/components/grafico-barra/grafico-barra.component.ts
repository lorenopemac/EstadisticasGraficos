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
      
      this.graficoProyecto(dataProyecto);
      this.graficoProyectoInversion(dataProyecto);
    }
  
/**GRAFICO DE CURVA DE AVANCES */
    graficoProyecto(dataVivienda) {
      let options: any = {
        chart: {
          plotBackgroundColor: "#ecf2fa",
          backgroundColor: "#ecf2fa",
          plotBorderWidth: null,
          plotShadow: false,
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
      yAxis: {
        
          title: {
              text: 'Avance (%)'
          },
          max: 100
      },
      xAxis:{
        type: 'datetime',
      },
        plotOptions: {
          series: {
              label: {
                  connectorAllowed: true
              },
              pointStart: Date.UTC(2020, 0),  
              pointInterval: 24 * 3600 * 1000*30,
              events: {
                click: function (event) {
                    console.log(event.point.id,event.point.name);//envio de IDLOCALIDAD y NOMBRE LOCALIDAD
                    //window.location.href = "/dashboard ";
                    self.router.navigate(['/obraEstado']);
                    //console.log(this);
                    //this.router.navigate(['dashboard']);
                    
                }
            },
          }
      },
        series: [{
          name: 'Previsto',
          data: [10, 14, 26, 35, 48, 59, 75, 80,86,95,100],
          color:'green'
      }, {
          name: 'Real',
          data: [10, 11, 16, 25, 38, 49, 65, 78,86,95,100],
          color:'red'
      }
      
    ],
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



/** GRAFICO DE CURVA DE INVERSION */
    graficoProyectoInversion(dataVivienda) {
      let options: any = {
        chart: {
          plotBackgroundColor: "#ecf2fa",
          plotBorderWidth: null,
          plotShadow: false,
          backgroundColor: "#ecf2fa",
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
        yAxis: {
          
            title: {
                text: 'Pesos ($)'
            }
        },
        xAxis:{
          type: 'datetime',
        },
        plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: Date.UTC(2020, 0),  
              pointInterval: 24 * 3600 * 1000*30,
          }
      },
        series: [ {
          name: 'Pesos',
          data: [5948, 8105, 11248,12908, 14816, 18274, 28111]
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
      Highcharts.chart('containerProyectoInversion', options);
    }
  }