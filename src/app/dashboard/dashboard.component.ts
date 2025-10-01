import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatStepperModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  Step_1_Form!: FormGroup;
  Step_2_Form!: FormGroup;
  Step_3_Form!: FormGroup;
  FormSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.Step_1_Form = this.fb.group({
      FirstName: ['', Validators.required]
    });
    this.Step_2_Form = this.fb.group({
      LastName: ['', Validators.required]
    });
    this.Step_3_Form = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  
  submitForm() {
      this.FormSubmitted = true;
  }


}
