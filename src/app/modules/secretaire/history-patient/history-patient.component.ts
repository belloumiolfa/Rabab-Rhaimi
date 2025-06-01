import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-patient.component.html',
  styleUrl: './history-patient.component.css'

})
export class HistoryPatientComponent implements OnInit {
  history: any[] = [];
  patientId: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id') || '';
    if (this.patientId) {
      this.loadHistory();
    }
  }

  loadHistory() {
    this.http.get<any[]>(`http://localhost:3000/api/appointments/history/${this.patientId}`)
      .subscribe(data => {
        this.history = data;
      }, error => {
        console.error('Erreur récupération historique', error);
      });
  }
}
