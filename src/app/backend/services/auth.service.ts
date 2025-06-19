import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  id: string;
  email: string;
  role: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/api/auth';
  private _isAdmin = false;
  public user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.refreshUserFromStorage(); // Auto-chargement au démarrage
  }

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
    this.user = null;
    this.router.navigate(['/main/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  isAdmin(): boolean {
    return this.user?.role === 'Dentiste' || this.user?.role === 'admin';
  }

  refreshUserFromStorage() {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
  }

  getCurrentUser(): User | null {
    if (!this.user) this.refreshUserFromStorage();
    return this.user;
  }
  setAdmin(value: boolean) {
    this._isAdmin = value;
  }
}
