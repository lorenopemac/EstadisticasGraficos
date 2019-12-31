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
    this.graficoViviendas();
    this.graficoInfraestructura();
    this.graficoMejoramiento();
    this.graficoProyecto();
  }

  graficoProyecto() {
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
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
    Highcharts.chart('container4', options);
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
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
    Highcharts.chart('container3', options);
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
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
    Highcharts.chart('container', options);
  }
  
  graficoViviendas(){
    let data1 =[{"name":"asd","y":60},{"name":"asd2","y":10},{"name":"asd3","y":16},{"name":"asd4","y":14}];
    console.log(data1);

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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data1
      }]
    } 
    Highcharts.chart('container2', options2);
  }

}
