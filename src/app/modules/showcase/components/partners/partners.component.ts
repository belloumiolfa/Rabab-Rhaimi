import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  /** logos fixes (mets tes vrais chemins ici) */
  baseLogos: string[] = [
    'assets/img/asso1.png',
    'assets/img/asso3.png',
    'assets/img/asso4.png',
    'assets/img/asso6.png',
  ];

  /** on répète 2× pour un effet “loop” fluide */
  repeatedLogos = [...this.baseLogos, ...this.baseLogos, ...this.baseLogos];
}
