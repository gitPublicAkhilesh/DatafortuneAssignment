import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  states = ['Select State', 'DL', 'MH', 'UP', 'KA', 'TN'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', Validators.required],
      newsletter: [false]
    }, { validators: this.emailMatchValidator });
  }

  emailMatchValidator(form: FormGroup) {
    const email = form.get('email')?.value;
    const confirmEmail = form.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.registrationService.submitRegistration(this.registerForm.value).subscribe({
        next: () => this.router.navigate(['/complete']),
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again later.');
        }
      });
    }
  }
}
