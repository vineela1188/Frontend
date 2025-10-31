import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GroupsComponent } from './groups/groups.component';
import { ServicePrincipalsComponent } from './service-principals/service-principals.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
/* import { ConnectorStatusComponent } from './connector-status/connector-status.component'; */
import { EditPolicyComponent } from './edit-policy/edit-policy.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  /* { path: 'userlist', component: UserListsComponent }, */
 /*  { path: 'userprofile', component: UserProfileComponent }, */
  { path: 'groups', component: GroupsComponent },
  /*  { path: 'editpolicy', component: EditPolicyComponent}, */
/*   { path: 'connectorstatus', component: ConnectorStatusComponent}, */
  /* { path: 'service-principals', component: ServicePrincipalsComponent }, */
  { path: '', redirectTo: 'service-principals', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'userlist', component: UserListsComponent },
      { path: 'service-principals', component: ServicePrincipalsComponent },
       { path: 'userprofile', component: UserProfileComponent },
       { path: 'editpolicy', component: EditPolicyComponent},
    ]
  }
  /*  {path : 'service-principals',
        loadComponent: () => import('./service-principals/service-principals.component').then(m => m. ServicePrincipalsComponent)
 } */

];

