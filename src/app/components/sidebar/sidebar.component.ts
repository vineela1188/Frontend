import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';
import { RouterModule } from '@angular/router';
/* import { AppRoutingModule } from "../app-routing.module"; */
import { MatIconModule } from '@angular/material/icon';


interface Menus {
  name: string;
  iconClass: string;
  classes: string;
  menuClass: string;
  subMenus: Array<any>;
  active: boolean;
 
  
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule/*  AppRoutingModule */],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // ✅ corrected key
})

export class SidebarComponent {
  openevent: any;

  isActive = true;
  hasError = false;
  collapse= false;
   isCollapsed = signal(false);

  toggleCollapse() {
    this.isCollapsed.update(v => !v);
  }

  menus: Menus[] = [ // ✅ moved inside class, removed `let`
    {
      name: 'User Management', iconClass: 'icon-Collaboration', classes: 'menu', menuClass: 'user-management',
      subMenus: [{
        name: 'Users',
        class: 'active',
        href: "/userlist"
      },
      {
        name: 'Groups',
        class: 'active',
        href: "/groups"
      }, {
        name: 'Roles',
        class: 'active',
        href: "/roles"
      },
      {
        name: 'Service Principals',
        class: 'active',
        href: "/service-principals"
      },
      {
        name: 'Permissions',
        class: 'active',
        href: "/permissions"
      }], active: true
    },
    {
      name: 'Policy Management', iconClass: 'icon-Articles', classes: 'menu2', menuClass: 'policy-management', 
      subMenus: [{
        name: 'Tag Policies',
        class: 'active'
      },], active: false
    },
    {
      name: 'Audits', iconClass: 'icon-Invoice-insight-advanced', classes: 'menu2', menuClass: 'audits',
      subMenus: [{
        name: 'Access',
        class: 'active'
      },
      {
        name: 'API Documentation',
        class: ''
      }, {
        name: 'Connector Status',
        class: 'active',
        href:"/connectorstatus"
      },
      {
        name: 'Admin',
        class: ''
      },
      {
        name: 'Login Sessions',
        class: ''
      },
      {
        name: 'User Sync',
        class: ''
      }], active: true
    },
    /*  {
      name: 'Support', iconClass: 'icon-Contact', classes: 'menu3', menuClass: 'support'
    } */
  ];

  header(): void {
    throw new Error('Method not implemented.');
  }



  toggles: boolean[] = []; // ✅ dynamic toggle state

  ngOnInit(): void {
    this.toggles = this.menus.map(() => false); // initialize all to false
  }

  setToggle(index: number, event?: KeyboardEvent): void {
    if (!event || event.key === 'Enter' || event.key === ' ') {
      this.toggles[index] = !this.toggles[index];
    }
  }


}
