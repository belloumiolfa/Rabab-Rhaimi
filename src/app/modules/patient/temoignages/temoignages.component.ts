import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.css']
})
export class TemoignagesComponent implements OnInit {
  testimonials: any[] = []; // 🔧 Nom unifié
  message = '';
  rating = 5;
  patientId = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.patientId = user?.id || '';
    console.log('📌 Mon patientId connecté =', this.patientId); // 👈

    this.loadTestimonials();
  }

  loadTestimonials() {
    this.http.get<any[]>(`http://localhost:3000/api/testimonial/patient/${this.patientId}`)
      .subscribe({
        next: (data) => {
          this.testimonials = data;
          console.log('Témoignages chargés', this.testimonials);
        },
        error: () => {
          console.error('Erreur lors du chargement des témoignages');
        }
      });
  }

  getUserName(patientId: string): string {
    if (patientId === this.patientId) return 'Moi';
    return 'Patient';
  }

  submit() {
    if (!this.message || !this.rating) return;

    const payload = {
      patient_id: this.patientId,
      message: this.message,
      rating: this.rating
    };

    this.http.post('http://localhost:3000/api/testimonial', payload).subscribe({
      next: () => {
        alert('✅ Témoignage envoyé avec succès');
        this.message = '';
        this.rating = 5;
        this.loadTestimonials();
      },
      error: () => {
        alert('  Erreur lors de l\'envoi');
      }
    });
  }
  deleteTestimonial(id: string) {
    if (!confirm('❗ Confirmer la suppression ?')) return;
  
    this.http.delete(`http://localhost:3000/api/testimonial/${id}`).subscribe({
      next: () => {
        alert('🗑️ Témoignage supprimé');
        this.loadTestimonials(); // Recharge
      },
      error: () => {
        alert('  Erreur lors de la suppression');
      }
    });
  }
  
}
