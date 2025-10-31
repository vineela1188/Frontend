// src/app/user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



interface UserProfile {
  syncDetails: SyncDetails;
  userProfile: UserProfile;
  username: string;
  fullName: string;
  email: string;
  role: string;
  group: string;
  value: number;
  dateTime: string;
}
interface SyncDetails {
  name: string;
  value: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  syncDetails1!: SyncDetails;
userProfile!: UserProfile;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<UserProfile>('http://localhost:8080/dams/user/profile-with-sync/johndoe700')
      .subscribe(data => {
        this.userProfile = data.userProfile
        this.syncDetails1 = data.syncDetails;
      
    });

    /* this.http.get<SyncDetails>('https://your-api.com/users/sync')
      .subscribe(data => this.syncDetails = data); */
  }
}
