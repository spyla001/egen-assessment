import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [60, 50, 30, 60, 70, 71, 72, 73], label: 'Curiosity' },
    { data: [80, 40, 40, 60, 64, 65, 70, 70], label: 'Knowledge' },
  ];
  // tslint:disable-next-line:max-line-length
  chartLabels = ['Engineering 2012', 'Engineering 2014', 'Engineering 2015',
    'Engineering 2016', 'Developer 2017', 'Developer 2018', 'Developer 2019', 'Developer 2020'];

  myColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }];

  ngOnInit(): void {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

}
