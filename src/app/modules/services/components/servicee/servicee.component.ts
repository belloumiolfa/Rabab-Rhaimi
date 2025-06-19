import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicee.component.html',
  styleUrls: ['./servicee.component.css']
})
export class ServiceeComponent {
  /** ➜ Données fixes issues de la base */
  services = [
    {
      id: 7,
      title: 'Implants dentaires',
      description: 'Dispositif destiné à remplacer une ou plusieurs dents manquantes par des racines artificielles.'
    },
    {
      id: 8,
      title: 'Blanchiment des dents',
      description: 'Procédure permettant d’éclaircir la teinte des dents pour améliorer l’esthétique du sourire.'
    },
    {
      id: 9,
      title: 'Détartrage & nettoyage',
      description: 'Élimination du tartre et de la plaque dentaire pour maintenir une bonne hygiène bucco-dentaire.'
    },
    {
      id: 10,
      title: 'Orthodontie adulte & enfant',
      description: 'Traitement visant à corriger l’alignement des dents et des mâchoires pour une meilleure fonction et esthétique.'
    },
    {
      id: 11,
      title: 'Soins esthétiques',
      description: 'Actes conservateurs ou prothétiques (facettes, composites…) visant à améliorer l’apparence du sourire.'
    },
    {
      id: 12,
      title: 'Soins conservateurs',
      description: 'Traitement des caries et restauration des dents altérées pour préserver la dentition naturelle.'
    }
  ];
}
