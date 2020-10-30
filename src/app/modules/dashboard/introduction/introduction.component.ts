import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../authorization/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  experienceLabels = ['Angular', 'Asp.Net'];
  experienceData = [55, 45];
  skills = [
    {
      skill: 'Angular',
      experience: 4
    },
    {
      skill: 'Asp.Net',
      experience: 2
    },
    {
      skill: 'NodeJs',
      experience: 2
    },
    {
      skill: 'HTML',
      experience: 5
    },
    {
      skill: 'css',
      experience: 5
    },
    {
      skill: 'Javascript',
      experience: 4
    },
    {
      skill: 'Git',
      experience: 3
    },
    {
      skill: 'TFS',
      experience: 1
    },
    {
      skill: 'D3js',
      experience: 2
    },
    {
      skill: 'object oriented programming',
      experience: 5
    },
    {
      skill: 'Jenkins',
      experience: 1
    },
    {
      skill: 'Jira',
      experience: 2
    }
  ];
  chartSkills = [
    { data: [4, 2, 2, 5, 5,  4, 3, 1, 2, 2, 1, 2], label: 'Skills' },
  ];
  skillLabels = ['Angular', 'Asp.Net', 'NodeJs', 'HTML', 'CSS', 'Javascript',
    'Git', 'TFS', 'D3js', 'object oriented programming', 'Jenkins', 'Jira']

    constructor(private auth: AuthService,
                private router: Router) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
    }
  }

}
