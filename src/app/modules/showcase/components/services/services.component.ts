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
      title: 'Formation Laser Dentaire',
      description: 'Biolase Laboratory, Nice, France | 2019',
    },
    {
      title: 'Orthodontie Systémique',
      description: 'Raymonde, Tunis, Tunisie | 2018',
    },
    { title: 'Implantologie Dentaire', description: 'Tunis, Tunisie | 2017' },
    {
      title: 'Réhabilitation Esthétique',
      description: 'Pesaro, Italie | 2017',
    },
    { title: 'Implantologie STRAUMANN', description: 'Bâle, Suisse | 2016' },
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
