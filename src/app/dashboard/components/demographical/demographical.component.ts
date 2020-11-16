import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color, MultiDataSet } from 'ng2-charts';

import { PeriodicElement } from './model/table.model';

const ELEMENT_DATA: PeriodicElement[] = [
  { assigned: 'David Gusta', designation: 'Web Designer', project: 'Shared', priority: 'Low', budget: 37000 },
  { assigned: 'John Deo', designation: 'Project Manager', project: 'Digital Residence', priority: 'Medium', budget: 12122 },
  { assigned: 'Jonathan', designation: 'Developer', project: 'Gold Finger', priority: 'High', budget: 40000 },
  { assigned: 'Andrew Hall', designation: 'Business Analyst', project: 'Brown Suger', priority: 'High', budget: 70000 },
  { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
];

@Component({
  selector: 'app-demographical',
  templateUrl: './demographical.component.html',
  styleUrls: ['./demographical.component.scss']
})
export class DemographicalComponent implements OnInit {
  displayedColumns: string[] = ['assigned', 'project', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

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

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: {
      display: false
    },
  };

  doughnutChartLabels: Label[] = ['T', 'G'];
  doughnutChartData: MultiDataSet = [
    [15, 50, 45]
  ];
  doughnutChartColors: Color[] =
    [
      {
        backgroundColor: [
          '#24d2b5',
          '#20aee3',
          '#136888'
      ]
      }
    ];
  doughnutChartType: ChartType = 'doughnut';


constructor() { }

ngOnInit() {
}

}
