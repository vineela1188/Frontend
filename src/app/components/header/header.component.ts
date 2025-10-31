import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Menus {
  name: string;
  iconClass: string;
  classes: string;
  menuClass: string;
  subMenus: Array<any>;
  active: boolean;
 selected:any;
  
}



@Component({
  selector: 'app-header',
  standalone: true,
    imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
 @Input() mode: string = 'positive';
 @Input() direction: string = 'left';
  currentTime = new Date();

  loginDateTime: string = '';
  // Signal for username
  username = signal(''); // will be set after login
selectedUser: any;
users: any;
/* dropdownOpen: any;
toggleDropdown: any;
 */
/* selectedUser: any; */

  
  ngOnInit(): void {
    const now = new Date();
        // Simulate login fetch (replace with actual service call)
    const loggedInUser = 'Anuradha'; // e.g., from token/localStorage/service
    this.username.set(loggedInUser);
  }

 getFormattedDateTime(): string {
  const now = new Date();

  const date = now.toLocaleDateString('en-GB'); // "12/10/2025"
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }); // "23:29:03"

  const suffix = now.getHours() >= 12 ? 'PM' : 'AM';
  return `${date} | ${time} ${suffix}`;
}

 items = ['Apple', 'Banana', 'Cherry'];
  selectedItem: string | null = null;
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.dropdownOpen = false;
  }

}