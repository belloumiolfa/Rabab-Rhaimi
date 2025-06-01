import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/api/auth';
  private _isAdmin = false;

  // ✅ Un seul constructeur ici aussi
  constructor(private http: HttpClient, private router: Router) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.api}/signin`, data);
  }

  register(data: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/main/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  setAdmin(value: boolean) {
    this._isAdmin = value;
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'Dentiste' || user.role === 'admin';
  }
}
