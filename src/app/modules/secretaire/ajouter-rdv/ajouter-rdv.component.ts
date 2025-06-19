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

  rdv = {
  email: '',
  first_name: '',
  name: '',
  phone: '',
  date_time: '',
  motif: ''
};
minDate = new Date().toISOString().slice(0, 16); // Format : YYYY-MM-DDTHH:mm


  constructor(private http: HttpClient) {}
isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
enregistrer() {
  const { email, first_name, name, phone, date_time, motif } = this.rdv;

  if (
    !email || !first_name || !name || !phone || !date_time || !motif ||
    phone.length !== 8 ||
    !this.isValidEmail(email)
  ) {
    alert('⚠️ Tous les champs doivent être correctement remplis.');
    return;
  }

  // ✅ Vérification que la date est dans le futur
  const dateChoisie = new Date(date_time);
  const maintenant = new Date();

  if (dateChoisie < maintenant) {
    alert('⚠️ Vous ne pouvez pas sélectionner une date/heure dans le passé.');
    return;
  }

  console.log('📤 Données envoyées :', this.rdv);

  this.http.post('http://localhost:3000/api/appointments/create-with-patient', this.rdv)
    .subscribe({
      next: () => {
        alert('✅ Rendez-vous ajouté avec succès');
        this.majListe.emit();
        this.fermer.emit();
      },
      error: (err) => {
        console.error('Erreur ajout rendez-vous', err);
        alert(err.error?.message || '❌ Erreur ajout rendez-vous');
      }
    });
}


}
