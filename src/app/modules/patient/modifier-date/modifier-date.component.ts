import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-date',
  standalone: true,
  imports:[FormsModule],
  template: `
    <h2>🔁 Modifier la date proposée</h2>
    <p>Proposition reçue pour le RDV n°{{ appointmentId }}</p>

    <label>Nouvelle date :</label>
    <input type="datetime-local" [(ngModel)]="newDate" />

    <button (click)="confirmer()">Confirmer</button>
  `
})
export class ModifierDateComponent implements OnInit {
  appointmentId = '';
  newDate = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.appointmentId = this.route.snapshot.paramMap.get('id') || '';
  }

  confirmer() {
    this.http.put(`http://localhost:3000/api/appointments/confirm-date/${this.appointmentId}`, {
      date_time: this.newDate
    }).subscribe(() => {
      alert("✅ Nouvelle date confirmée !");
    });
  }
}
