import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-rendez-vous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-rendez-vous.component.html',
  styleUrls: ['./mes-rendez-vous.component.css']
})
export class MesRendezVousComponent implements OnInit {
  rdv: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('❌ Aucun utilisateur trouvé dans le localStorage.');
      return;
    }

    const user = JSON.parse(storedUser);
    const patientId = user?.id;

    if (patientId) {
      this.http.get<any[]>(`http://localhost:3000/api/appointments/patient/${patientId}`)
        .subscribe({
          next: (appointments) => {
            this.rdv = appointments;
            console.log('📅 RDV chargés', this.rdv);
          },
          error: (err) => {
            console.error('❌ Erreur chargement RDV :', err);
          }
        });
    } else {
      console.warn('⚠️ ID patient introuvable dans l’objet user.');
    }
  }
  canCancel(date_time: string): boolean {
    const rdvDate = new Date(date_time);
    const now = new Date();
    const diffInMs = rdvDate.getTime() - now.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
  
    return diffInHours >= 24;
  }
  
  cancelAppointment(id: number) {
    if (confirm("⚠️ Es-tu sûr de vouloir annuler ce rendez-vous ?")) {
      this.http.delete<{ message: string }>(`http://localhost:3000/api/appointments/cancel/${id}`)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.ngOnInit(); // recharge les RDVs
          },
          error: (err) => {
            console.error("Erreur d'annulation :", err);
            alert(err.error.message || "Erreur lors de l’annulation");
          }
        });
    }
  }
  
  
}
