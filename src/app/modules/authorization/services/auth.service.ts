import { Injectable } from '@angular/core';
import { StorageService} from '../../../services/storage.service';
import {Router} from '@angular/router';
import { Subscription, Subject} from 'rxjs';
import {LoginData} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscription = new Subscription();
  public authSubject = new Subject<boolean>();


  constructor(private storage: StorageService,
              private router: Router) { }

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    // TODO: implement some authentication engine:
    // return !this.jwtHelper.isTokenExpired(token);

    return !!this.storage.user;
  }
  public logoff() {
    this.storage.clear();
    this.router.navigate(['/auth/login']);
  }

  public getCurrentUser() {
    if (this.isAuthenticated()) {
      return this.storage.user;
    }
    return null;
  }
  public login(user) {
    this.storage.user = user;
    if (this.isAuthenticated()) {
      this.authSubject.next(true);
      this.router.navigate(['/dashboard/intro']);
    }
  }
}
