import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AvailabilityModalComponent } from "../availability-modal/availability-modal.component";

@Component({
  selector: 'app-manage-availability-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, AvailabilityModalComponent],
  templateUrl: './manage-availability-calendar.component.html',
})
export class ManageAvailabilityCalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;
  availabilityAModifier: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      slotMinTime: '08:00:00',
      slotMaxTime: '18:00:00',
      allDaySlot: false,
      nowIndicator: true,
      selectable: true,
      editable: true,
      events: [],
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek'
      }
    };
    
    

    this.loadDisponibilites();
  }

  loadDisponibilites() {
    this.http.get<any[]>('http://localhost:3000/api/availabilities').subscribe(data => {
      this.calendarOptions.events = data.map(dispo => ({
        id: dispo.id,
        title: 'Disponible',
        start: dispo.start_datetime,
        end: dispo.end_datetime,
      }));
    });
  }
  

  formatDatetime(day: string, time: string): string {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // aller au dimanche
    const dayMapping: any = {
      'Dimanche': 0,
      'Lundi': 1,
      'Mardi': 2,
      'Mercredi': 3,
      'Jeudi': 4,
      'Vendredi': 5,
      'Samedi': 6
    };
  
    const eventDate = new Date(startOfWeek);
    eventDate.setDate(startOfWeek.getDate() + dayMapping[day]);
    
    const datePart = eventDate.toISOString().split('T')[0];
    return `${datePart}T${time}`;
  }
  formatDateTimeLocal(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  

  handleDateClick(arg: any) {
    const start = new Date(arg.date);
    const end = new Date(start);
    end.setHours(end.getHours() + 1); // ajoute 1h automatiquement
  
    // Récupère ID dentiste (statique ou depuis session)
    const dentist_id = 'ID_DU_DENTISTE';
  
    if (start.getDay() === 0) {
      alert('❌ Dimanche non disponible.');
      return;
    }
    if (start.getDay() === 6 && start.getHours() >= 12) {
      alert('❌ Samedi après 12h non disponible.');
      return;
    }
  
    const confirmer = confirm(`✅ Confirmez-vous la disponibilité de ${start.toLocaleString()} à ${end.toLocaleString()} ?`);
  
    if (confirmer) {
      this.http.post('http://localhost:3000/api/availabilities/create', {
        start_datetime: this.formatDateTimeLocal(start),
end_datetime: this.formatDateTimeLocal(end),

        dentist_id
      }).subscribe({
        next: () => {
          alert('✅ Disponibilité enregistrée.');
          this.loadDisponibilites();
        },
        error: () => {
          alert('❌ Erreur serveur.');
        }
      });
    }
  }
  
  
  ajouter1Heure(date: Date): string {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 1);
    return newDate.toTimeString().slice(0, 5); // retourne HH:mm
  }
  
  

  handleEventClick(arg: any) {
    const event = arg.event;
    this.availabilityAModifier = {
      id: event.id,
      start_datetime: this.formatLocalDatetime(event.start),
      end_datetime: this.formatLocalDatetime(event.end)
    };
  }
  
  formatLocalDatetime(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  
  
  
  formatTime(date: Date): string {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;  }
  
      getDayOfWeek(date: Date): string {
        const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        return days[date.getDay()];
      }
  
      handleUpdate(updateAvailability: any) {
        console.log('🔎 Données envoyées au backend pour modification :', updateAvailability);
      
        const body = {
          start_datetime: updateAvailability.start_datetime,
          end_datetime: updateAvailability.end_datetime
        };
      
        console.log('🛠️ Corps de la requête envoyée au backend :', body);
      
        this.http.put(`http://localhost:3000/api/availabilities/update/${updateAvailability.id}`, body)
          .subscribe({
            next: () => {
              alert('✅ Disponibilité modifiée');
              this.availabilityAModifier = null;
              this.loadDisponibilites();
            },
            error: (err) => {
              console.error('Erreur modification', err);
              alert('❌ Erreur modification');
            }
          });
      }
      
      
      
  
  
  handleDelete(id: string) {
    this.http.delete(`http://localhost:3000/api/availabilities/delete/${id}`)
      .subscribe({
        next: () => {
          alert('✅ Disponibilité supprimée');
          this.availabilityAModifier = null;
          this.loadDisponibilites();
        },
        error: () => {
          alert('❌ Erreur suppression');
        }
      });
  }
  
}
