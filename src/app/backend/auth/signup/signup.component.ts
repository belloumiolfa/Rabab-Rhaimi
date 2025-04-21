// 📦 FRONTEND - signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      role: ['Patient']
    });
  }

  signup() {
    if (this.form.invalid) return;

    this.authService.signup(this.form.value).subscribe({
      next: () => {
        this.successMsg = 'Inscription réussie ✅';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMsg = err.error.message || 'Erreur lors de l\'inscription';
      }
    });
  }
}