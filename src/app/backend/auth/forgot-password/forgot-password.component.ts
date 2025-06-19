import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.css'// ✅ ajoute ceci

})
export class ForgotPasswordComponent {
  form: FormGroup;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.http.post<any>('http://localhost:3000/api/auth/forgot-password', this.form.value)
      .subscribe({
        next: (res) => {
          this.successMsg = res.message;
          this.errorMsg = '';
        },
        error: (err) => {
          this.successMsg = '';
          this.errorMsg = err.error.message || 'Erreur';
        }
      });
  }
}
