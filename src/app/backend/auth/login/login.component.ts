import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  errorMsg: string = '';
  userInfo: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    }); 
  }
  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  
  login() {
    this.http.post<any>('http://localhost:3000/api/auth/signin', this.form.value)
      .subscribe({
        next: (res) => {
          this.userInfo = res.user;
          this.errorMsg = '';

          console.log('Login réussi ✅', res);

          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          
          if (res.user.role === 'Admin') {
            this.router.navigate(['/admin']);
          } else if (res.user.role === 'Patient') {
            this.router.navigate(['/patient-dashboard'])
          }
            else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.userInfo = null;
          this.errorMsg = err.error.message || 'Erreur inconnue';
        }
        
      });
      

  }
  
}
