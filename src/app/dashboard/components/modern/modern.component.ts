import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.scss']
})
export class ModernComponent {
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
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Growth'
    },
    {
      barThickness: 16,
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Net'
    }
  ];

  barChartColors: Color[] = [
    { backgroundColor: '#24d2b5' },
    { backgroundColor: '#20aee3' },
  ];


  lineChartData: ChartDataSets[] = [
    { data: [50, 70, 78, 60, 44, 75], label: 'Crude oil prices' },
    { data: [60, 65, 85, 55, 55, 67], label: 'asdf' },
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
      borderColor: '#19937f',
      backgroundColor: '#24d2b5',
    },
    {
      borderColor: '#136888',
      backgroundColor: '#20aee3',
    },
  ];
  lineChartPlugins = [];
  lineChartType = 'line';
}
