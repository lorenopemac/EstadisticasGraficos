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
  public options: any = {
    chart: {
      plotBackgroundColor: null,
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
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: '',
          y: 11.84
      }, {
          name: '',
          y: 10.85
      }, {
          name: '',
          y: 4.67
      }]
    }]
  }

  public options2: any = {
    chart: {
      plotBackgroundColor: null,
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
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: '',
          y: 11.84
      }, {
          name: '',
          y: 10.85
      }, {
          name: '',
          y: 4.67
      }]
    }]
  } 

  ngOnInit(){
    Highcharts.chart('container', this.options);
    Highcharts.chart('container2', this.options2);
  }

}
