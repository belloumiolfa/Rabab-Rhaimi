import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assoication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assoication.component.html',
  styleUrl: './assoication.component.css'
})
export class AssoicationComponent {
  baseLogos = [
    'assets/img/partners/1.svg',
    'assets/img/partners/3.png',
    'assets/img/partners/1.svg',
    'assets/img/partners/3.png'
  ];

  // Répéter les logos pour faire une boucle visuellement infinie
  repeatedLogos = [...this.baseLogos, ...this.baseLogos, ...this.baseLogos];
}
