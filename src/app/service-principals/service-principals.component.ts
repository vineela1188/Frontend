import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListViewComponent } from '../components/list-view/list-view.component'; // adjust path as needed

interface Item {
 principalname:string;
 applicationId: string;
  role: string;
  source: string;
  status: string;
   
}
 

@Component({
  selector: 'app-service-principals',
  standalone: true,
  imports: [CommonModule, FormsModule, ListViewComponent],
  templateUrl: './service-principals.component.html',
  styleUrls: ['./service-principals.component.css']

})

export class ServicePrincipalsComponent implements OnInit {
  baseUrl = 'http://localhost:8080/dams/service';
  dataArray: Item[] = [];
 /*  filteredArray: Item[] = []; */
  searchInput = '';
  search = '';
  selectedStatus = '';
  itemType: 'service' = 'service';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  getItems() {
    return this.http.get<Item[]>(`${this.baseUrl}/principal/getServicePrincipal`);
  }

  fetchData(): void {
    this.getItems().subscribe({
      next: (data) => {
        this.dataArray = data;
       /*  this.filteredArray = data; */
         console.log(JSON.stringify(data));
      },

      error: (err) => console.error('Error fetching items:', err)

    });

  }
}
