import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dossier-medical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {
  records: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const patientId = user?.id;

    if (patientId) {
      this.http.get<any[]>(`http://localhost:3000/api/medical-records/patient/${patientId}`)
        .subscribe({
          next: (data) => this.records = data,
          error: () => alert('Erreur lors du chargement des dossiers médicaux')
        });
    }
  }
}
