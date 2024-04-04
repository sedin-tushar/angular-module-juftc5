import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  template: `
    <Modal [isOpen]="true" title="Login" actionLabel="Sign in" (submit)="handleSubmit()">
      <form [formGroup]="loginForm">
        <div class="flex flex-col gap-4">
          <app-input placeholder="Email" type="email" required="true" email="true" formControlName="email"></app-input>
          <app-input placeholder="Password" type="password" required="true" formControlName="password"></app-input>
        </div>
      </form>
    </Modal>
  `,
  styles: [],
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loginForm.get('email')!.valueChanges.subscribe((value) => {
      console.log('email value changed:', value);
    });

    this.loginForm.get('password')!.valueChanges.subscribe((value) => {
      console.log('password value changed:', value);
    });
  }

  handleSubmit(): void {
    console.log('heloo');
    console.log(this.loginForm.value);
  }
}
