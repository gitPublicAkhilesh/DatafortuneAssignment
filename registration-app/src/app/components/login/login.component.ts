import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  password: string = '';
  error: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    debugger
    if (this.authService.validatePassword(this.password)) {
      this.router.navigate(['/register'], { skipLocationChange: true });
    } else {
      this.error = 'Invalid password. Please try again.';
    }
  }
}
