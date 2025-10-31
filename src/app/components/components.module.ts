import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
// Shared Components
/* import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component'; */
import { ListViewComponent } from './list-view/list-view.component';
 
@NgModule({
  declarations: [
   /*  HeaderComponent,
    FooterComponent,
    SidebarComponent, */
   
  ],
  imports: [
    CommonModule,
     ListViewComponent
  ],
  exports: [
 /*    HeaderComponent,
    FooterComponent,
    SidebarComponent, */
    ListViewComponent
  ]
})
export class SharedModule {}