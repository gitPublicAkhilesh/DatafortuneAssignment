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
        next: () => this.router.navigate(['/complete'], { skipLocationChange: true }),
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again later.');
        }
      });
    }
  }
}



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegistrationApiService, RegistrationPayload } from '../../services/registration-api.service';
//  import { Router } from '@angular/router';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
//   registerForm!: FormGroup;
//   submitted = false;
//   success = false;
//   error = '';
// states = ['Select State', 'DL', 'MH', 'UP', 'KA', 'TN'];
//   constructor(
//     private fb: FormBuilder,
//     private registrationApi: RegistrationApiService,
//       private router: Router,
       
//   ) {
//     this.registerForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       state: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       confirmEmail: ['', [Validators.required, Validators.email]],
//       newsletter: [false]
//     }, {
//       validators: this.matchEmails
//     });
//   }

//   matchEmails(form: FormGroup) {
//     const email = form.get('email')?.value;
//     const confirm = form.get('confirmEmail')?.value;
//     return email === confirm ? null : { emailMismatch: true };
//   }

//   onSubmit(): void {
//     //debugger
//     this.submitted = true;

//     if (this.registerForm.invalid) return;

//     const formData: RegistrationPayload = {
//       firstName: this.registerForm.value.firstName,
//       lastName: this.registerForm.value.lastName,
//       state: this.registerForm.value.state,
//       email: this.registerForm.value.email,
//       subscribe: this.registerForm.value.newsletter
//     };

//     this.registrationApi.submit(formData).subscribe({
//        next: () => this.router.navigate(['/complete'], { skipLocationChange: true }),
//         error: (err) => {
//           console.error('Registration failed:', err);
//           alert('Registration failed. Please try again later.');
//         }      
//     });
//   }
// }

