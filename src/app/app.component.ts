import { Component,Injectable } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({ providedIn: 'root' })
export class AppComponent {

  constructor() {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // });
  }
}

