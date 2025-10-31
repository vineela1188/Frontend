// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserProfile {
  username: string;
  name: string;
  email: string;
  role: string;
  group: string;
}

export interface SyncDetails {
  name: string;
  value: number;
  dateTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/dams/users'; // Replace with your actual endpoint

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/profile`);
  }

  getSyncDetails(): Observable<SyncDetails> {
    return this.http.get<SyncDetails>(`${this.apiUrl}/sync`);
  }
}
