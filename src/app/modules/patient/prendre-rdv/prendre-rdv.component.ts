import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-prendre-rdv',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule],
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {
  calendarOptions: CalendarOptions | undefined;
  selectedDate: string = '';
  selectedTime: string = '';
  motif: string = '';
  showModal = false;
  isBrowser = false;
isEmergency: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  
    if (this.isBrowser) {
      const today = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD
  
      this.calendarOptions = {
        initialView: 'timeGridWeek', // ⬅️ vue hebdomadaire
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        selectable: true,
        nowIndicator: true,
        allDaySlot: false,
        slotMinTime: '08:00:00', // début des créneaux
        slotMaxTime: '18:00:00', // fin des créneaux
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,dayGridMonth'
        },
        events: [], // 👇 injectées dynamiquement
        eventClick: this.handleEventClick.bind(this),
        dateClick: this.handleDateClick.bind(this),

      };
      const socket = io('http://localhost:3000');
      socket.on('disponibilite-update', (data) => {
        console.log('🧠 Disponibilité mise à jour :', data);
        this.loadAvailabilities(); // Recharge le calendrier automatiquement
      });

      this.loadAvailabilities(); 

      
    }
  }
  handleEventClick(arg: any) {
    const clickedDate = new Date(arg.event.start);
    const isoDate = clickedDate.toISOString().split('T')[0];
    const time = clickedDate.toTimeString().slice(0, 5);
  
    this.selectedDate = isoDate;
    this.selectedTime = time;
    this.showModal = true;
  }
  
  
  handleDateClick(arg: any) {
    const clickedDate = new Date(arg.date); // ✅ Utiliser `arg.date` au lieu de `arg.dateStr`
    const clickedTimestamp = clickedDate.getTime();
  
    const now = new Date();
    if (clickedDate < now) {
      alert("  Tu ne peux pas sélectionner une date passée !");
      return;
    }
  
    const matched = this.availabilities.find((dispo: any) => {
      const start = new Date(dispo.start_datetime).getTime();
      const end = new Date(dispo.end_datetime).getTime();
      return clickedTimestamp >= start && clickedTimestamp < end;
    });
  
    if (!matched) {
      alert("  Ce créneau n'est pas disponible.");
      return;
    }
  
    this.selectedDate = clickedDate.toISOString().split('T')[0];
    this.selectedTime = clickedDate.toTimeString().slice(0, 5); // HH:mm
    this.showModal = true;
  }
  
  

submitRdv() {
  const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
  if (!userInfo.id) {
    alert("Utilisateur non connecté ou session expirée.");
    return;
  }

  // 🕒 Reconstituer la date complète demandée
  const datetime = `${this.selectedDate}T${this.selectedTime}`; // format : "2025-06-06T10:00"

  if (this.isEmergency) {
    // 🆘 Cas urgent → envoyer une demande avec la bonne date
    this.http.post('http://localhost:3000/api/appointments/demande-urgente', {
      patient_id: userInfo.id,
      motif: this.motif,
      date_rdv: datetime, // 👈 doit être la date sélectionnée, pas l’instant actuel
    }).subscribe({
      next: () => {
        alert('🆘 Demande urgente envoyée avec succès');
        this.resetForm();
      },
      error: err => {
        console.error("Erreur demande urgente", err);
        alert('  Erreur demande urgente');
      }
    });

  } else {
    // 📅 RDV normal
    this.http.post('http://localhost:3000/api/appointments/create', {
      patient_id: userInfo.id,
      date_time: datetime,
      status: 'en_attente',
      is_emergency: 0,
      motif: this.motif
    }).subscribe({
      next: () => {
        alert('✅ Rendez-vous pris avec succès');
        this.resetForm();
        this.loadAvailabilities();
      },
      error: err => {
        console.error("Erreur RDV", err);
        alert('  Erreur lors de la prise de rendez-vous');
      }
    });
  }
}

  

  resetForm() {
    this.selectedDate = '';
    this.selectedTime = '';
    this.motif = '';
    this.showModal = false;
  }
  injectAvailabilitiesInCalendar() {
    if (this.calendarOptions) {
      this.calendarOptions.events = this.availabilities
        .filter(dispo => dispo.is_available === 1) // ✅ Filtre seulement les créneaux disponibles
        .map(dispo => ({
          id: dispo.id,
          title: '🟢 Disponible',
          start: dispo.start_datetime,
          end: dispo.end_datetime,
          color: 'green'
        }));
    }
  }
  
  
  

  availabilities: any[] = [];

loadAvailabilities() {
  this.http.get<any[]>('http://localhost:3000/api/availabilities')
    .subscribe(data => {
      this.availabilities = data;
      this.injectAvailabilitiesInCalendar();
    });
}

}
