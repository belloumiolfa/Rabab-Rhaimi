import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-liste-patients',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = [];
  filteredPatients: any[] = [];
  searchTerm = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/user/patients').subscribe(data => {
      this.patients = data;
      this.filteredPatients = data;
    });
  }

  filter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patients.filter(p =>
      p.firstname.toLowerCase().includes(term) || p.name.toLowerCase().includes(term)
    );
  }

  goToMedicalRecord(patientId: string) {
    this.router.navigate(['/dashboard-dentiste/dossier-medical', patientId]);
  }
}
