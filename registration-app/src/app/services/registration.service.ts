import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrations: any[] = [];

  constructor() {
    const saved = localStorage.getItem('registrations');
    if (saved) {
      this.registrations = JSON.parse(saved);
    }
  }

  submitRegistration(data: any): Observable<any> {
    const entry = {
      id: this.generateUUID(),
      firstName: data.firstName,
      lastName: data.lastName,
      state: data.state,
      email: data.email,
      subscribe: data.newsletter
    };

    this.registrations.push(entry);
    localStorage.setItem('registrations', JSON.stringify(this.registrations));

    console.log('Registration saved (mocked):', entry);
    return of(entry);
  }

  getAllRegistrations(): Observable<any[]> {
    return of(this.registrations);
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
