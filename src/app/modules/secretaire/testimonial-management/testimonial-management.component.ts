import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../../backend/services/testimonial.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonial-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonial-management.component.html',
  styleUrls: ['./testimonial-management.component.css']
})
export class TestimonialManagementComponent implements OnInit {
  testimonials: any[] = [];
  statusFilter: string = 'all';
statuses: string[] = ['all', 'pending', 'approved', 'rejected'];
  

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
  if (this.statusFilter === 'all') {
    this.testimonialService.getAllTestimonials().subscribe(
      (data) => this.testimonials = data,
      (error) => console.error('Erreur lors du chargement des témoignages', error)
    );
  } else {
    this.testimonialService.getTestimonialsByStatus(this.statusFilter).subscribe(
      (data) => this.testimonials = data,
      (error) => console.error('Erreur lors du filtrage', error)
    );
  }
}


  onStatusFilterChange(): void {
    this.loadTestimonials(); // pas besoin de $event, ngModel suffit
  }

  approveTestimonial(id: string): void {
    this.testimonialService.approveTestimonial(id).subscribe(
      () => {
        Swal.fire('Succès', 'Témoignage validé avec succès !', 'success');
        this.loadTestimonials();
      },
      (error) => {
        Swal.fire('Erreur', 'Impossible de valider le témoignage.', 'error');
      }
    );
  }

  deleteTestimonial(id: string): void {
    this.testimonialService.deleteTestimonial(id).subscribe(
      () => {
        Swal.fire('Supprimé', 'Témoignage supprimé avec succès.', 'success');
        this.loadTestimonials();
      },
      (error) => {
        Swal.fire('Erreur', 'Échec de la suppression.', 'error');
      }
    );
  }

  confirmApprove(id: string): void {
    Swal.fire({
      title: 'Valider ce témoignage ?',
      text: 'Cette action rendra le témoignage visible sur la vitrine.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, valider',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) this.approveTestimonial(id);
    });
  }

  confirmDelete(id: string): void {
    Swal.fire({
      title: 'Supprimer ce témoignage ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) this.deleteTestimonial(id);
    });
  }
  rejectTestimonial(id: string): void {
  if (!id) {
    console.error("  ID manquant pour le rejet !");
    return;
  }

  this.testimonialService.rejectTestimonial(id).subscribe(
    () => {
      Swal.fire('Rejeté', 'Témoignage rejeté avec succès.', 'success');
      this.loadTestimonials();
    },
    (error) => {
      Swal.fire('Erreur', 'Impossible de rejeter le témoignage.', 'error');
      console.error('Erreur API rejet :', error);
    }
  );
}



}
