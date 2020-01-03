import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);

@Component({
  selector: 'grafico-torta',
  templateUrl: './grafico-torta.component.html',
  styleUrls: ['./grafico-torta.component.css']
})


export class GraficoTortaComponent implements OnInit {
  

  

  ngOnInit(){
    let dataVivienda =[{"name":"Iniciada","y":60},{"name":"Ejecución","y":10},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
    let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
    //let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
    //let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
    this.graficoViviendas(dataVivienda);
    this.graficoInfraestructura();
    this.graficoMejoramiento();
    this.graficoProyecto(dataProyecto);
  }

  graficoProyecto(dataVivienda) {
    let options: any = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: "#E0E0E0",
        type: 'pie'
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
  graficoMejoramiento() {
    let options: any = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        backgroundColor: "#E0E0E0",
        plotShadow: false,
        type: 'pie'
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
        colorByPoint: true,
        clip: false,
        animation: {
          duration: 1300
      },
        data: [{
            name: 'aa',
            y: 61.41,
            sliced: false,
            selected: true
        }, {
            name: 'dd',
            y: 11.84
        }, {
            name: 'ee',
            y: 10.85
        }]
      }]
    }
    Highcharts.chart('containerMejoramiento', options);
  }
  graficoInfraestructura() {
    let options: any = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: "#E0E0E0",
        type: 'pie'
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
        data: [{
            name: 'aa',
            y: 61.41,
            sliced: false,
            selected: true
        }, {
            name: 'dd',
            y: 11.84
        }, {
            name: 'ee',
            y: 10.85
        }]
      }]
    }
    Highcharts.chart('containerInfraestructura', options);
  }
  
  graficoViviendas(dataVivienda){
    
    console.log(dataVivienda);

    let options2: any = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: "#E0E0E0",
        type: 'pie'
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
    Highcharts.chart('containerVivienda', options2);
  }

}
