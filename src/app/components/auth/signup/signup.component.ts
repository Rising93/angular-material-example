import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate!: Date;
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ]}),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]}),
      birthdate: new FormControl('', {
        validators: [
          Validators.required
        ]}),
      agree: new FormControl('', {
        validators: [
          Validators.required,
          Validators.requiredTrue
        ]
      })
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
