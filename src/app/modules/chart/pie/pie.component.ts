import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() pieChartLabels: string[];
  @Input() pieChartData: number[];
  public pieChartType = 'pie';
  public pieChartOptions: any = {backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ]};

  ngOnInit(): void {
  }

  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
}
