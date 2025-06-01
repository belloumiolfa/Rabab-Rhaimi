import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DegreeService {
  private baseUrl = 'http://localhost:3000/api/degrees';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  create(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
