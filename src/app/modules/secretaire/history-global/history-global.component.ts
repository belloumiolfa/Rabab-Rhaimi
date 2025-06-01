import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-global',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history-global.component.html',
  styleUrls: ['./history-global.component.css']
})
export class HistoryGlobalComponent implements OnInit {
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.http.get<any[]>('http://localhost:3000/api/appointments/history-global')
      .subscribe(data => {
        this.appointments = data;
        this.filteredAppointments = data;
      });
  }

  filterAppointments() {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.filteredAppointments = this.appointments;
      return;
    }

    this.filteredAppointments = this.appointments.filter(rdv =>
      (rdv.firstname && rdv.firstname.toLowerCase().includes(term)) ||
      (rdv.name && rdv.name.toLowerCase().includes(term)) ||
      (rdv.status && rdv.status.toLowerCase().includes(term))
    );
  }
}
