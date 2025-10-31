import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Item {
  policyname: string;
  policylabel: string;
  status: string,
  auditlogging: string,
  groups: string;
  users: string;
}

@Component({
  selector: 'app-tag-policy',
  imports: [CommonModule],
  templateUrl: './tag-policy.component.html',
  styleUrl: './tag-policy.component.css'
})


export class TagPolicyComponent {

  private baseUrl = 'http://localhost:8080/dams/tag';
  dataArray: Item[] = [];
  constructor(private http: HttpClient) {}
   ngOnInit(): void {
    this.fetchData();
  }

  getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.baseUrl+"/tagPolicy/getTagPolicy");
    }
  fetchData(): void {
  
    this.getItems().subscribe({
      next: (data) => {
        this.dataArray = data
        console.log("sddfhjdf", this.dataArray);
      },
      error: (err) => console.error('Error fetching items:', err)
    });
  }

}
