import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

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
      title: 'Réhabilitation esthétique et fonctionnelle Fradeani Education',
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

  scrollLeft(scrollContainer: any) {
    scrollContainer?.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
  scrollRight(scrollContainer: any) {
    scrollContainer?.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
