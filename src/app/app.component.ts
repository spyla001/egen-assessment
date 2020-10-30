import { Component, OnInit } from '@angular/core';
import {AuthService} from './modules/authorization/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Assessment';
  authentication = false;
  constructor(private auth: AuthService) {
  }

  logout() {
    this.auth.logoff();
    this.authentication = false;
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.authentication = true;
    }
    this.auth.authSubject.subscribe(x => {
      if (x) {
        this.authentication = true;
      }
    });
  }
}
