import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-api.com/login';
  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }
}
