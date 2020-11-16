import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss']
})
export class MinimalComponent {
  title = 'app';


  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  };
  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      barThickness: 16,
      data: [65, 59, 80],
      label: 'Growth'
    },
    {
      barThickness: 16,
      data: [28, 48, 40],
      label: 'Net'
    }
  ];

  barChartColors: Color[] = [
    { backgroundColor: '#24d2b5' },
    { backgroundColor: '#20aee3' },
  ];


  lineChartData: ChartDataSets[] = [
    {
      data: [10, 20, 38, 50, 64, 75],
      label: 'Crude oil prices',
      fill: false
    },
    {
      data: [15, 25, 5, 45, 25, 67],
      label: 'asdf',
      fill: false
    },
    {
      data: [5, 15, 35, 55, 65, 77],
      label: 'asdf',
      fill: false
    },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#24d2b5',
    },
    {
      borderColor: '#20aee3',
    },
    {
      borderColor: '#fd5052',
    },
  ];
  lineChartPlugins = [];
  lineChartType = 'line';



  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: {
      display: false
    },
  };

  doughnutChartLabels: Label[] = ['T', 'G', 'B'];
  doughnutChartData: MultiDataSet = [
    [15, 50, 35]
  ];
  doughnutChartColors: Color[] =
    [
      {
        backgroundColor: [
          '#24d2b5',
          '#20aee3',
          '#fd5052'
        ]
      }
    ];
  doughnutChartType: ChartType = 'doughnut';
}
