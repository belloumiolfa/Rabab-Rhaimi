import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  /** ➜ Contenu désormais 100 % statique */
  services = [
    {
      title: 'Implantologie dentaire avec le système Straumann®',
      description: 'Switzerland | 2016',
    },
    {
      title: 'Implantologie dentaire',
      description: 'Tunis, Tunisie | 2017',
    },
    {
      title:
        'Formation Fradeani Education – Réhabilitation esthétique et fonctionnelle',
      description: 'Pesaro (Italie), 2017',
    },
    {
      title: 'CEC Chirurgie Orale et Techniques Innovantes',
      description: 'Monastir, Tunisie |2023',
    },
    {
      title: 'Formation full arch ILAPEO',
      description: 'Brésil curitiba 2024',
    },
    { title: 'Pratique en implantologie', description: 'IAOI, Paris | 2016' },
    { title: 'Injection d’acide hyaluronique', description: 'Tunis | 2016' },
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
