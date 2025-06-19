import { Component, OnInit } from '@angular/core';
import { AvailabilityModalComponent } from '../availability-modal/availability-modal.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AuthService } from '../../../backend/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-availability-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, AvailabilityModalComponent],
  templateUrl: './manage-availability-calendar.component.html',
  styleUrls: ['./manage-availability-calendar.component.css',]

})
export class ManageAvailabilityCalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;
  availabilityAModifier: any = null;

constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      slotMinTime: '08:00:00',
      slotMaxTime: '18:01:00',
      height: 'auto',
      allDaySlot: false,
      nowIndicator: true,
      selectable: true,
      editable: true,
      events: [],
      locale: frLocale, // ✅ ICI pour passer en français
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
    const now = new Date(); 
    const events = data.map(dispo => {
      const isPast = new Date(dispo.end_datetime) < now;

      return {
        id: dispo.id,
        title: 'Disponible',
        start: dispo.start_datetime,
        end: dispo.end_datetime,
        classNames: isPast ? ['dispo-passee'] : ['dispo-future']
      };
    });

    // ✅ Affecter les événements une fois transformés
    this.calendarOptions.events = events;
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
  end.setHours(end.getHours() + 1);

  const user = this.authService.getCurrentUser();
  if (!user || !user.id) {
    Swal.fire({
      icon: 'error',
      title: 'Accès refusé',
      text: '  Dentiste non connecté !',
      confirmButtonColor: '#ff6600'
    });
    return;
  }

  const dentist_id = user.id;

  // 🔒 Vérifier si date est dans le passé (jour précédent aujourd'hui)
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // début de la journée

  const clickedDate = new Date(start);
  const clickedDay = new Date(start);
  clickedDay.setHours(0, 0, 0, 0);

  if (clickedDay < today) {
    Swal.fire({
      icon: 'error',
      title: 'Date invalide',
      text: '⛔ Vous ne pouvez pas ajouter une disponibilité dans le passé.',
      confirmButtonColor: '#ff6600'
    });
    return;
  }

  // 🔒 Si aujourd'hui → heure choisie doit être dans le futur
  if (clickedDay.getTime() === today.getTime() && start < now) {
    Swal.fire({
      icon: 'warning',
      title: 'Heure invalide',
      text: '⛔ Vous ne pouvez pas ajouter une disponibilité dans le passé aujourd’hui.',
      confirmButtonColor: '#ff6600'
    });
    return;
  }

  // 🔒 Dimanche interdit
  if (start.getDay() === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Jour non disponible',
      text: '⛔ Le dimanche n’est pas autorisé.',
      confirmButtonColor: '#ff6600'
    });
    return;
  }

  // 🔒 Samedi après 12h interdit
  if (start.getDay() === 6 && start.getHours() >= 12) {
    Swal.fire({
      icon: 'warning',
      title: 'Heure non disponible',
      text: '⛔ Le samedi après 12h est interdit.',
      confirmButtonColor: '#ff6600'
    });
    return;
  }

  // ✅ Confirmation
  Swal.fire({
    icon: 'question',
    title: 'Confirmer la disponibilité ?',
    html: `Souhaitez-vous ajouter une disponibilité le <strong>${start.toLocaleString()}</strong> jusqu'à <strong>${end.toLocaleString()}</strong> ?`,
    showCancelButton: true,
    confirmButtonText: 'Oui, confirmer',
    cancelButtonText: 'Annuler',
    confirmButtonColor: '#ff6600',
    cancelButtonColor: '#aaa',
    customClass: {
      popup: 'swal2-z-top'
    }
  }).then(result => {
    if (result.isConfirmed) {
      this.http.post('http://localhost:3000/api/availabilities/create', {
        start_datetime: this.formatDateTimeLocal(start),
        end_datetime: this.formatDateTimeLocal(end),
        dentist_id
      }).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Ajoutée !',
            text: ' Disponibilité enregistrée.',
            timer: 3000,
            showConfirmButton: false,
            customClass: {
              popup: 'swal2-z-top'
            }
          });
          this.loadDisponibilites();
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur serveur',
            text: ' Impossible d’enregistrer la disponibilité.',
            confirmButtonColor: '#ff6600'
          });
        }
      });
    }
  });
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
    start_datetime: event.start.toISOString(),  // convert to string
    end_datetime: event.end.toISOString()
  };

  console.log("Availability to edit:", this.availabilityAModifier);
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
      
        console.log(' Corps de la requête envoyée au backend :', body);
      
        this.http.put(`http://localhost:3000/api/availabilities/update/${updateAvailability.id}`, body)
          .subscribe({
            next: () => {
              Swal.fire({
                icon: 'success',
                title: 'Modifiée !',
                text: 'La disponibilité a été mise à jour.',
                timer: 1500,
                showConfirmButton: false,
                customClass: {
                  popup: 'swal2-z-top'
                }
              });              this.availabilityAModifier = null;
              this.loadDisponibilites();
            },
            error: (err) => {
              console.error('Erreur modification', err);
              alert('  Erreur modification');
            }
          });
    }
      
      
      
  
  
  handleDelete(id: string) {
    this.http.delete(`http://localhost:3000/api/availabilities/delete/${id}`)
      .subscribe({
        next: () => {
      Swal.fire({
      icon: 'success',
      title: 'Supprimée !',
      text: 'La disponibilité a été supprimée.',
      timer: 1500,
      showConfirmButton: false
    });          this.availabilityAModifier = null;
          this.loadDisponibilites();
        },
        error: () => {
          alert('  Erreur suppression');
        }
      });
  }
  
}
