import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData} from '../models/login';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string;
  title = 'Assessment';
  authForm = this.fb.group({
    userId: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.authForm.patchValue({
      userId: 'spyla223@gmail.com',
      password: 'egen-assessment'
    });
    if(this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard/intro']);
    }
  }

  onSubmit() {
    const user: LoginData = this.authForm.value;
    if (user.userId === 'spyla223@gmail.com' && user.password === 'egen-assessment' ) {
      this.auth.login(user);
    }
  }
}
