import { Injectable } from '@angular/core';
import { LOGIN_PASSWORD } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validatePassword(input: string): boolean {
    return input == LOGIN_PASSWORD;
  }
}
