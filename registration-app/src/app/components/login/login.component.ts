import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.password === 'akhilesh.015sep@gmail.com') {
      this.router.navigate(['/register']);
    } else {
      this.error = 'Invalid password. Please try again.';
    }
  }
}
