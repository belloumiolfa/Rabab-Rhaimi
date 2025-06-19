import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
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
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  goToForgotPassword() {
    this.router.navigate(['/main/forgot-password']);
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

          // ✅ Marquer l'admin comme connecté si rôle = admin
          if (res.user.role === 'Dentiste') {
            this.authService.setAdmin(true); // Active le mode admin
            this.router.navigate(['/dashboard-dentiste']);
          } else if (res.user.role === 'secretaire') {
            this.router.navigate(['/dashboard-secretaire']);
          } else {
            this.router.navigate(['/patient-dashboard']);
          }
        },
        error: (err) => {
          this.userInfo = null;
          this.errorMsg = err.error.message || 'Erreur inconnue';
        }
      });
  }
  
}
