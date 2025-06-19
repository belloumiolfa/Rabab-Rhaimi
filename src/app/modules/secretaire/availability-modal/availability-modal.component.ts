// availability-modal.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-availability-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './availability-modal.component.html',
  styleUrls: ['./availability-modal.component.css']
})
export class AvailabilityModalComponent implements OnInit {
  @Input() availability: any;
  @Output() updated = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  startDate: string = '';
  startTime: string = '';
  endTime: string = '';
  masquerModale = false;

  errorMessage = '';
  private initialStart: string = '';
  private initialEnd: string = '';
  private initialDate: string = '';

  champDebutInvalide = false;
  champFinInvalide = false;
  dateInvalide = false;



  ngOnInit(): void {
    this.setInitialValues();
  }

setInitialValues() {
  if (this.availability) {
    const start = new Date(this.availability.start_datetime);
    const end = new Date(this.availability.end_datetime);

    this.startDate = start.toISOString().split('T')[0];

    // ✅ Affiche l'heure locale au format HH:mm
    this.startTime = start.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    this.endTime = end.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    // Stocker les valeurs initiales pour la détection de changements
    this.initialDate = this.startDate;
    this.initialStart = this.startTime;
    this.initialEnd = this.endTime;
  }
}


save() {
  this.errorMessage = '';
  this.champDebutInvalide = false;
  this.champFinInvalide = false;
  this.dateInvalide = false;

  if (!this.startDate || !this.startTime || !this.endTime) {
    this.errorMessage = "⛔ Tous les champs doivent être remplis.";
    return;
  }

  const today = new Date();
  const selectedDate = new Date(this.startDate);
  selectedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    this.dateInvalide = true;
    this.errorMessage = "⛔ La date sélectionnée ne peut pas être dans le passé.";
    return;
  }

  const start = new Date(`${this.startDate}T${this.startTime}:00`);
  const end = new Date(`${this.startDate}T${this.endTime}:00`);

  if (start >= end) {
    this.errorMessage = "⛔ L'heure de fin doit être après l'heure de début.";
    this.champDebutInvalide = true;
    this.champFinInvalide = true;
    return;
  }

  const diffInMinutes = (end.getTime() - start.getTime()) / 60000;
  if (diffInMinutes < 15) {
    this.errorMessage = "⛔ L’écart minimum est de 15 minutes entre début et fin.";
    this.champDebutInvalide = true;
    this.champFinInvalide = true;
    return;
  }

  const noChange =
    this.startDate === this.initialDate &&
    this.startTime === this.initialStart &&
    this.endTime === this.initialEnd;

  if (noChange) {
    this.masquerModale = true;
    setTimeout(() => {
      Swal.fire({
        icon: 'info',
        title: 'Aucune modification détectée',
        text: 'Vous devez modifier au moins un champ.',
        timer: 2000,
        showConfirmButton: false,
        customClass: { popup: 'swal2-z-top' },
        didClose: () => (this.masquerModale = false),
      });
    }, 50);
    return;
  }

  // Confirmation
  this.masquerModale = true;
  setTimeout(() => {
    Swal.fire({
      title: 'Confirmer la modification ?',
      text: 'Souhaitez-vous vraiment enregistrer les changements ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, enregistrer',
      cancelButtonText: 'Annuler',
      customClass: { popup: 'swal2-z-top' },
    }).then((result) => {
      if (result.isConfirmed) {
        const newStart = `${this.startDate}T${this.startTime}:00`;
        const newEnd = `${this.startDate}T${this.endTime}:00`;

        this.updated.emit({
          ...this.availability,
          start_datetime: newStart,
          end_datetime: newEnd,
        });

        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: '✔️ Disponibilité mise à jour',
            text: 'Les changements ont été enregistrés avec succès.',
            timer: 1500,
            showConfirmButton: false,
            customClass: { popup: 'swal2-z-top' },
            didClose: () => {
              this.close.emit();
              this.masquerModale = false;
            },
          });
        }, 50);
      } else {
        this.masquerModale = false;
      }
    });
  }, 50);
}



  delete() {
  // Passe la modale en arrière-plan
  this.masquerModale = true;

  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: "Cette disponibilité sera supprimée définitivement.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Oui, supprimer',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      this.deleted.emit(this.availability.id);
      this.close.emit(); // Fermer la modale seulement si confirmé

      Swal.fire({
        icon: 'success',
        title: 'Supprimée !',
        text: 'La disponibilité a été supprimée.',
        timer: 1500,
        showConfirmButton: false
      });
    } else {
      // Si annulation → remettre la modale au premier plan
      this.masquerModale = false;
    }
  });
}


}
