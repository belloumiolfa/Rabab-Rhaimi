// src/app/services/certification.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CertificationService {
  private apiUrl = 'http://localhost:3000/api/certifications';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(certif: any): Observable<any> {
    return this.http.post(this.apiUrl, certif);
  }

  update(id: number, certif: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, certif);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
