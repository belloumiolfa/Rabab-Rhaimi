import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-today-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './today-patients.component.html',
  styleUrls: ['./today-patients.component.css']
})
export class TodayPatientsComponent implements OnInit {
  patientsToday: any[] = [];
  filteredAppointments: any[] = [];
  searchTerm: string = '';

  // Pour la modal :
  showModal: boolean = false;
  patientHistory: any[] = [];
  selectedPatientName: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTodayPatients();
  }

  loadTodayPatients() {
    this.http.get<any[]>('http://localhost:3000/api/appointments/today')
      .subscribe(data => {
        this.patientsToday = data;
        this.filteredAppointments = data;
      });
  }

  markAsArrived(appointmentId: string) {
    this.http.put(`http://localhost:3000/api/appointments/status/${appointmentId}`, { status: 'Arrived' })
      .subscribe(() => {
        alert('✅ Patient marqué comme arrivé');
        this.loadTodayPatients();
      }, () => {
        alert('❌ Erreur lors du marquage');
      });
  }

  filterAppointments() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filteredAppointments = term 
      ? this.patientsToday.filter(rdv =>
          (rdv.firstname && rdv.firstname.toLowerCase().includes(term)) ||
          (rdv.name && rdv.name.toLowerCase().includes(term)) ||
          (rdv.phone && rdv.phone.includes(term)))
      : this.patientsToday;
  }

  openHistory(patientId: string, fullName: string) {
    this.selectedPatientName = fullName;
    this.showModal = true;
    this.http.get<any[]>(`http://localhost:3000/api/appointments/history/${patientId}`)
      .subscribe(data => {
        this.patientHistory = data;
      }, error => {
        console.error('Erreur récupération historique', error);
      });
  }

  closeModal() {
    this.showModal = false;
    this.patientHistory = [];
  }
}
