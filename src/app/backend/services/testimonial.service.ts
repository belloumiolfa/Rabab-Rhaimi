import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private apiUrl = 'http://localhost:3000/api/testimonial'; // ✅ nom correct + sans query

  constructor(private http: HttpClient) { }

  // 🔹 Récupérer les témoignages par statut
getTestimonialsByStatus(status: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/status?status=${status}`);
}


  // 🔹 Valider un témoignage
  approveTestimonial(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/approve/${id}`, {});
  }

  // 🔹 Supprimer un témoignage (pour la secrétaire)
  deleteTestimonial(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  rejectTestimonial(id: string): Observable<any> {
return this.http.put(`${this.apiUrl}/reject/${id}`, {});
}
getAllTestimonials(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/api/testimonial');
}


}
