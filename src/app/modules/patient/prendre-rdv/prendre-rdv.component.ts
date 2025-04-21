import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  
    if (this.isBrowser) {
      const today = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD
  
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        selectable: true,
        validRange: {
          start: today // 🔒 Ne permet pas de sélectionner dans le passé
        },
        dateClick: this.handleDateClick.bind(this),
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectAllow: (selectInfo) => {
          const date = new Date(selectInfo.startStr);
          const day = date.getDay(); // 0 = Sunday, 6 = Saturday
          return day !== 0 && day !== 6; // ❌ Bloque samedi et dimanche
        }
      };
    }
  }
  

  handleDateClick(arg: any) {
    const clickedDate = new Date(arg.dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    if (clickedDate < today) {
      alert("❌ Tu ne peux pas sélectionner une date passée !");
      return;
    }
  
    const day = clickedDate.getDay(); // 0 = dimanche, 6 = samedi
    if (day === 0 || day === 6) {
      alert("❌ Les samedis et dimanches sont indisponibles.");
      return;
    }
  
    this.selectedDate = arg.dateStr;
    this.showModal = true;
  }
  

  submitRdv() {
    if (this.selectedTime && this.motif)    {
      const datetime = `${this.selectedDate}T${this.selectedTime}`;
      const userInfo = JSON.parse(localStorage.getItem('user') || '{}');

      this.http.post('http://localhost:3000/api/appointments/create', {
        patient_id: userInfo.id,
        date_time: datetime,
        status: 'Booked',
        is_emergency: 0,
        motif: this.motif
      }).subscribe({
        next: () => {
          alert('✅ Rendez-vous pris avec succès');
          this.resetForm();
        },
        error: () => alert('❌ Erreur lors de la prise de rendez-vous'),
      });
    }
  }

  resetForm() {
    this.selectedDate = '';
    this.selectedTime = '';
    this.motif = '';
    this.showModal = false;
  }
}
