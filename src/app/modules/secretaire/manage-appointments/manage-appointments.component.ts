import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModifierRdvComponent } from "../modifier-rdv/modifier-rdv.component";
import { AjouterRdvComponent } from "../ajouter-rdv/ajouter-rdv.component";

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  standalone: true,
  styleUrls: ['./manage-appointments.component.css'],
  imports: [CommonModule, FormsModule, ModifierRdvComponent, AjouterRdvComponent]
})
export class ManageAppointmentsComponent implements OnInit {

  rdvAModifier: any = null;
  constructor(private http: HttpClient) {}
  ajouterRdvOuvert: boolean = false; // 🆕 pour gérer le formulaire ajout

  selectedStatus: string = '';
  appointments: any[] = [];
  filteredAppointments: any[] = [];

  rdvARefuser: any = null;
  propositionDate: string = '';
  commentaire: string = '';


  annulationEnCours = false;

  
  cancelWithProposal(rdv: any) {
    this.rdvARefuser = rdv; // réutilise la même logique que refuser
    this.propositionDate = '';
    this.commentaire = '';
    this.annulationEnCours = true;
  }
  
  
  ngOnInit() {
    this.loadAppointments();
  }
  
  onStatusChange() {
    this.loadAppointments();
  }
  
  loadAppointments() {
    let url = 'http://localhost:3000/api/appointments';
    if (this.selectedStatus) {
      url += `?status=${this.selectedStatus}`;
    }
  
    this.http.get(url).subscribe(
      (data: any) => {
        this.appointments = data;
        this.filteredAppointments = data;
      },
      error => console.error('Erreur chargement rendez-vous', error)
    );
  }
  // Pour les actions
  accepter(id: string) {
    this.updateStatus(id, 'accepte');
  }
  
  refuser(rdv: any) {
    this.rdvARefuser = rdv;
    this.propositionDate = '';
    this.commentaire = '';
  }
  
  
  annuler(id: string) {
    this.updateStatus(id, 'annule');
  }
  
  updateStatus(id: string, status: string) {
    this.http.put(`http://localhost:3000/api/appointments/status/${id}`, { status })
      .subscribe(() => this.loadAppointments());
  }

ouvrirFormulaire(rdv: any) {
  this.rdvAModifier = { ...rdv };
}

// Pour fermer le formulaire si besoin
fermerFormulaire() {
  this.rdvAModifier = null;
}
ouvrirFormulaireAjout() {
  this.ajouterRdvOuvert = true;
}

fermerFormulaireAjout() {
  this.ajouterRdvOuvert = false;
}
envoyerProposition() {
  if (!this.propositionDate) return alert('Veuillez saisir une nouvelle date');

  const url = this.annulationEnCours
    ? `http://localhost:3000/api/appointments/cancel-with-proposal/${this.rdvARefuser.id}`
    : `http://localhost:3000/api/appointments/reject-with-proposal/${this.rdvARefuser.id}`;

  this.http.put(url, {
    new_date: this.propositionDate,
    commentaire: this.commentaire
  }).subscribe({
    next: () => {
      alert("✅ Proposition envoyée !");
      this.rdvARefuser = null;
      this.annulationEnCours = false;
      this.loadAppointments();
    },
    error: () => alert("  Erreur lors de l'envoi.")
  });
}
formatLocalDate(isoDate: string): string {
  const localDate = new Date(isoDate);
  return localDate.toLocaleString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  }

}

