import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  
  login() {
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      alert('Login Successful');
      this.router.navigate(['dashboard']);
    }
  }

}
