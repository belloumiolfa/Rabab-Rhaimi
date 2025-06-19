import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demandes-urgentes',
  templateUrl: './demandes-urgentes.component.html',
  styleUrls: ['./demandes-urgentes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DemandesUrgentesComponent implements OnInit {
  demandesUrgentes: any[] = [];
  disponibilites: any[] = [];
  showSelectDispo = false;
  demandeAConfirmer: any = null;
  selectedDisponibiliteId: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.chargerDemandes();
    this.chargerDisponibilites();
  }

  chargerDemandes(): void {
    this.http.get<any[]>('http://localhost:3000/api/demandes-urgentes').subscribe({
      next: (data) => (this.demandesUrgentes = data),
      error: (err) => console.error('Erreur de chargement', err),
    });
  }

  chargerDisponibilites(): void {
    const now = new Date();
    this.http.get<any[]>('http://localhost:3000/api/availabilities').subscribe({
      next: (data) => {
        this.disponibilites = data
          .filter(d => d.is_available === 1 && new Date(d.start_datetime) > now)
          .sort((a, b) => new Date(a.start_datetime).getTime() - new Date(b.start_datetime).getTime());
      },
      error: () => console.error('Erreur chargement disponibilités')
    });
  }

ouvrirSelection(demande: any): void {
  this.demandeAConfirmer = demande;
  this.selectedDisponibiliteId = '';

  const demandeDate = new Date(demande.date_rdv).toISOString().slice(0, 16);

  const dispoCorrespondante = this.disponibilites.find(dispo => {
    const dispoDate = new Date(dispo.start_datetime).toISOString().slice(0, 16);
    return dispoDate === demandeDate;
  });

  if (dispoCorrespondante) {
    this.selectedDisponibiliteId = dispoCorrespondante.id;
    console.log("✅ Créneau correspondant trouvé :", dispoCorrespondante.start_datetime);
  } else {
    console.warn("⚠️ Aucun créneau correspondant trouvé pour", demandeDate);
  }

  this.showSelectDispo = true;
}



 confirmerAcceptation(): void {
  if (!this.selectedDisponibiliteId) {
    Swal.fire('⛔ Attention', 'Veuillez sélectionner une disponibilité.', 'warning');
    return;
  }

  this.http.post(`http://localhost:3000/api/demandes-urgentes/accepter/${this.demandeAConfirmer.id}`, {
    disponibilite_id: this.selectedDisponibiliteId
  }).subscribe({
    next: () => {
      Swal.fire('✅ Acceptée', 'La demande urgente a été acceptée.', 'success');
      this.chargerDemandes();
      this.showSelectDispo = false;
    },
    error: (err) => {
      console.error('Erreur Backend:', err.error);
      Swal.fire('  Erreur', 'Impossible d’accepter la demande.', 'error');
    }
  });
}


  refuserDemande(demandeId: string): void {
    Swal.fire({
      title: 'Refuser la demande ?',
      text: 'Elle sera retirée de la liste.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, refuser',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .post(`http://localhost:3000/api/demandes-urgentes/refuser/${demandeId}`, {})
          .subscribe({
            next: () => {
              Swal.fire('  Refusée', 'La demande urgente a été refusée.', 'success');
              this.chargerDemandes();
            },
            error: () => Swal.fire('Erreur', 'Échec du refus de la demande.', 'error'),
          });
      }
    });
  }
}
