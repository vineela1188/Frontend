import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MenuListingComponent } from "../menu-listing/menu-listing.component";
import { ListViewComponent } from '../components/list-view/list-view.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

interface Item {
  id: number;
  userName: string;
  fullName: string;
  emailAddress: string;
  role: string;
  groups: string;
  status: string;
}


@Component({
  selector: 'app-user-lists',
  imports: [CommonModule, FormsModule, ListViewComponent ],
  standalone: true,
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent {
  
handleItemClick(data: any) {
console.log('Received from child:', data);
}
  private baseUrl = 'http://localhost:8080/dams/user';
  dataArray: Item[] = [];
  searchInput = '';
   search = '';
  selectedStatus = '';
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchData();
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + "/getUsers");
  }

   navigateToUserProfile() {
    alert("dsffdgfd");
    this.router.navigate(['userprofile']);
  }


  fetchData(): void {
    this.getItems().subscribe({
      next: (data) => {
        this.dataArray = data;
      },

      error: (err) => console.error('Error fetching items:', err)

    });

  }
}
