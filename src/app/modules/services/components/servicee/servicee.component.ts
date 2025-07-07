import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicee.component.html',
  styleUrls: ['./servicee.component.css'],
})
export class ServiceeComponent {
  /** ➜ Données fixes issues de la base */
  services = [
    {
      id: 7,
      title: 'Implants dentaires',
      description:
        'Dispositif destiné à remplacer une ou plusieurs dents manquantes par des racines artificielles.',
    },
    {
      id: 8,
      title: 'La réhabilitation prothétique et esthétique',
      description:
        'Actes conservateurs ou prothétiques (facettes, Couronnes, bridges, prothèses sur implants…) visant à améliorer l’apparence du sourire.',
    },
    {
      id: 9,
      title: 'Soins Parodéontologique',
      description:
        'soins des gencives et de l’os qui soutient les dents (Le détartrage, le surfaçage radiculaire, chirurgies parodontales...)',
    },
    {
      id: 10,
      title: 'Chirurgie dentaire',
      description:
        'les interventions chirurgicales dans la bouche, que ce soit sur les dents, les gencives, l’os ou les tissus avoisinants. (Extraction de dents...)',
    },
    {
      id: 11,
      title: 'Soins conservateurs',
      description:
        'L’objectif est de préserver la dent naturelle le plus longtemps possible, en évitant son extraction (Traitement des caries, Reconstitution d’une dent fracturée...)',
    },
    {
      id: 12,
      title: 'Orthodontie adulte',
      description:
        ' la correction de l’alignement des dents et de la mâchoire chez les patients de plus de 18 ans, pour des raisons esthétiques et fonctionnelles ( Aligneurs invisibles.)',
    },
    {
      id: 13,
      title: 'Eclaircissement dentaire',
      description:
        ' Procédure permettant d’éclaircir la teinte des dents pour améliorer l’esthétique du sourire.',
    },
  ];
}
