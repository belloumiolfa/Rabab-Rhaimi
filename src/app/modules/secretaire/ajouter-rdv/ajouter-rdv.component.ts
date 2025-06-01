import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-rdv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRdvComponent {
  @Output() fermer = new EventEmitter<void>();
@Output() majListe = new EventEmitter<void>();
  patient = {
    email: '',
    first_name: '',
    name: '',
    phone: ''
  };

  rdv = {
    date_time: '',
    motif: ''
  };

  constructor(private http: HttpClient) {}

  enregistrer() {
    const data = {
      ...this.patient,
      ...this.rdv
    };

    this.http.post('http://localhost:3000/api/appointments/create-with-patient', data)
      .subscribe({
        next: (res) => {
          alert('✅ Rendez-vous ajouté avec succès');
          this.majListe.emit();
          this.fermer.emit();   
        },
        error: (err) => {
          console.error('Erreur ajout rendez-vous', err);
          alert('❌ Erreur ajout rendez-vous');
        }
      });
  }
}
