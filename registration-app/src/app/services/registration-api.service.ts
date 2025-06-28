import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

//const API_BASE_URL = 'https://codingexercise.speakcore.com/api/registrations';
const API_BASE_URL = 'https://codingexercise.speakcore.com/api/registrations';
const API_KEY = 'akhilesh.015sep@gmail.com'; // Replace with your email

export interface RegistrationPayload {
  firstName: string;
  lastName: string;
  state: string;
  email: string;
  subscribe: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {

  constructor(private http: HttpClient) {}

  submit(data: RegistrationPayload): Observable<any> {
    const params = new HttpParams().set('key', API_KEY);
    return this.http.post(API_BASE_URL, data, { params });
  }
}
