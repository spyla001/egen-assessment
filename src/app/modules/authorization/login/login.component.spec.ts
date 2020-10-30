import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginData} from '../models/login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('form invalid when empty', () => {
    expect(component.authForm.valid).toBeFalsy();
  });
  it('Email field validity When Empty', () => {
    const email = component.authForm.controls.userId;
    console.log(email);
    expect(email.valid).toBeFalsy();
  });

  it('Email field validity When Empty', () => {
    const email = component.authForm.controls.userId;
    console.log(email);
    expect(email.valid).toBeFalsy();
  });
  it('submitting a form emits a user', () => {
    expect(component.authForm.valid).toBeFalsy();
    component.authForm.controls.userId.setValue('spyla223@gmail.com');
    component.authForm.controls.password.setValue('egen-assessment');
    expect(component.authForm.valid).toBeTruthy();

    let user: LoginData;

    // Trigger the login function
    component.onSubmit();
    // user value after onSubmit
    user = component.authForm.value;


    expect(user.userId).toBe('spyla223@gmail.com');
    expect(user.password).toBe('egen-assessment');
  });
});
