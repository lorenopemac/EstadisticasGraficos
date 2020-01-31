import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RouterLink, Router } from '@angular/router';
import { GraficoTortaService } from '../../services/grafico-torta.service';

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
  selector: 'grafico-torta',
  templateUrl: './grafico-torta.component.html',
  styleUrls: ['./grafico-torta.component.css']
})

export class GraficoTortaComponent implements OnInit {
  

 

constructor( private router: Router, private serviceTorta:GraficoTortaService) {
  self = this; // Assign outer context to self
}

  ngOnInit(){
    //let dataVivienda =[{"name":"Iniciada","id":"8","y":60},{"name":"Ejecución","id":"9","y":10},{"name":"Finalizada","id":"11","y":16},{"name":"Entregada","id":"12","y":14}];
    let dataProyecto =[{"name":"Iniciada","y":30},{"name":"Ejecución","y":40},{"name":"Finalizada","y":16},{"name":"Entregada","y":14}];
    let dataVivienda = this.serviceTorta.getEstadoVivienda();
    this.graficoViviendas(dataVivienda);
    this.graficoInfraestructura();
    this.graficoMejoramiento();
    this.graficoProyecto(dataProyecto);
  }

  graficoProyecto(dataVivienda) {
    let options: any = {
      chart: {
        plotBackgroundColor: "#ecf2fa",
          backgroundColor: "#ecf2fa",
        plotBorderWidth: null,
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
        plotBackgroundColor: "#ecf2fa",
          backgroundColor: "#ecf2fa",
        plotBorderWidth: null,
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
        plotBackgroundColor: "#ecf2fa",
          backgroundColor: "#ecf2fa",
        plotBorderWidth: null,
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
        plotBackgroundColor: "#ecf2fa",
        backgroundColor: "#ecf2fa",
        plotBorderWidth: null,
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
        name: 'Brands',
        colorByPoint: true,
        data: dataVivienda,
        events: {
          click: function (event) {
              console.log(event.point.id,event.point.name);//envio de IDLOCALIDAD y NOMBRE LOCALIDAD
              //window.location.href = "/dashboard ";
              self.router.navigate(['/obraEstado']);
              //console.log(this);
              //this.router.navigate(['dashboard']);
              
          }
      },
      }]
    } 
    Highcharts.chart('containerVivienda', options2);
  }

}
