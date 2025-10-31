import { Component, input, Input, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'stream';
import { Observable } from 'rxjs';

interface user {
  id: number;
  userName: string;
  fullName: string;
  emailAddress: string;
  role: string;
  groups: string;
  status: string;
}
interface services {
  principalname: string;
  applicationId: string;
  role: string;
  source: string;
  status: string;

}

@Component({
  selector: 'app-list-view',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {

  onFilterChange() {

  }
  users = []; // Populate with mock or API data
  pageSizes = [4, 10, 20];
  currentPage = 1;
  totalPages = 10;

  onlyAdmins = false;
  adminCount = 11;
  private baseUrl = 'http://localhost:8080/dams/user';
  @Input() data: any;


/*  @Output() myEvent: EventEmitter<any> = new EventEmitter<any>();
(this.myEvent as Observable<any>).subscribe((data) => {
  console.log(data);
});
 */

  // dataArray: Item[] = [];
  // @Input() filteredArray: Item[] = [];
  // @Input() searchInput: string = '';
  // @Input() search: string = '';
  // @Input() selectedStatus: string = '';
  @Input() itemType: any;
  // @Input() itemType: 'services' | 'users' = 'services'; 

  constructor(private router: Router, private http: HttpClient) { }

  onPageSizeChange(size: number) {
    // Update page size logic
  }
  goToPage(page: number) {
    this.currentPage = page;
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }

  ngOnInit(): void {
    //this.fetchData();
  }

  // getItems(): Observable<Item[]> {
  //   let data: Observable<Item[]>;
  //   if(this.itemType === "users")
  //   {
  //    this.data = this.http.get<Item[]>(this.baseUrl + "/getUsers");

  //   }
  //   return data;
  // }


  // fetchData(): void {

  //   this.getItems().subscribe({
  //     next: (data) => this.dataArray1 = data,
  //     error: (err) => console.error('Error fetching items:', err)
  //   });
  // }

  navigateToUserProfile() {
    alert("dsffdgfd");
    this.router.navigate(['userprofile']);
  }

  searchItems() {

    //const keyword = this.searchInput;
    /*  this.filteredArray = this.dataArray.filter(user =>
       user.userName.includes(keyword) ||
       user.fullName.includes(keyword) ||
       user.emailAddress.includes(keyword) ||
       user.role.includes(keyword) ||
       user.groups.includes(keyword) ||
       user.status.includes(keyword)
     );
  */
    // console.log("filtered array", this.filteredArray);
    //this.dataArray = this.filteredArray;

  }
  searchItems1() {

    // const keyword = this.searchInput;
    /*  this.filteredArray = this.dataArray.filter(user =>
       user.userName.includes(keyword) ||
       user.fullName.includes(keyword) ||
       user.emailAddress.includes(keyword) ||
       user.role.includes(keyword) ||
       user.groups.includes(keyword) ||
       user.status.includes(keyword)
     );
  */
    //console.log("filtered array", this.filteredArray);
    //this.dataArray = this.filteredArray;

  }
  onStatusChange(keyword: string): void {
    // this.filteredArray = this.dataArray.filter(user =>
    //   user.status == keyword
    // );

    //console.log("filtered array", this.filteredArray);
    //this.dataArray = this.filteredArray;
  }

}
