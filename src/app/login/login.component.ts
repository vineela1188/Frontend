import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  username = '';
  password = '';
  errorMessage = '';
  private baseUrl = 'http://localhost:8080/dams/user/login';

  constructor(private router: Router,private fb: FormBuilder,private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
login(credentials: { email: string; password: string }): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, credentials, {headers});
  }


  onSubmit() {
    const credentials = {
      email: this.username,
      password: this.password
    };
    
    console.log("hfdjhfdjs",credentials);
    this.login(credentials).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        // Handle token or redirect
        if(res.message == "Login Successfull")
        {
        this.router.navigate(['userlist']);

        }
        else
        {
        this.errorMessage = res.message;
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }
}
