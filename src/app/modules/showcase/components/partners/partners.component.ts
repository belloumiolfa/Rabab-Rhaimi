import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  baseLogos = [
    'assets/img/asso1.png',
    'assets/img/asso3.png',
    'assets/img/asso4.png',
    'assets/img/asso5.png',
    'assets/img/asso6.png',

  ];

  // Répéter les logos pour faire une boucle visuellement infinie
  repeatedLogos = [...this.baseLogos, ...this.baseLogos, ...this.baseLogos];
}
