import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];
  userId = JSON.parse(localStorage.getItem('user') || '{}').id;
  constructor(private http: HttpClient, private router: Router) {}
  
  
  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.http.get<any[]>(`http://localhost:3000/api/notifications/${this.userId}`)
      .subscribe(data => {
        this.notifications = data;
      });
  }

  markAsRead(notification: any): void {
    this.http.put(`http://localhost:3000/api/notifications/read/${notification.id}`, {})
      .subscribe({
        next: () => {
          // ✅ Supprimer de la liste locale
          this.notifications = this.notifications.filter(n => n.id !== notification.id);
  
          // ✅ Redirection optionnelle
          if (notification.type === 'confirmation_rdv') {
            this.router.navigate(['/patient-dashboard/mes-rendez-vous']);
          }
        },
        error: err => console.error('Erreur lecture notif', err)
      });
  }
  confirmNewDate(notification: any) {
    const data = JSON.parse(notification.data || '{}');
    const newDate = data?.new_date;
    const appointmentId = data?.appointment_id;
  
    if (!appointmentId || !newDate) {
      alert("  Erreur : ID ou date manquante !");
      return;
    }
  
    console.log('🟢 Envoi PUT avec :', {
      id: appointmentId,
      date_time: newDate
    });
  
    this.http.put(`http://localhost:3000/api/appointments/confirm-date/${appointmentId}`, {
      date_time: newDate
    }).subscribe({
      next: () => {
        alert('✅ Nouvelle date confirmée !');
        this.markAsRead(notification);
      },
      error: err => {
        console.error('  Erreur confirmation :', err);
        alert('  Erreur lors de la confirmation');
      },
    });
  }
  
  
  getParsedData(notif: any) {
    try {
      return JSON.parse(notif.data || '{}');
    } catch {
      return {};
    }
  }
  
  
}
