import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Degree {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  start_year: number;
  end_year: number;
  show: boolean;
}

@Component({
  selector: 'app-service22',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service22.component.html',
  styleUrls: ['./service22.component.css'],
})
export class Service22Component {
  /** ➜ Contenu fixe issu de la capture MySQL */
  degrees: Degree[] = [
    {
      id: 1,
      title: 'Docteur en Diplôme en implantologie et chirurgie maxillo-faciale',
      subtitle: 'Université Toulouse III – Paul Sabatier, Toulouse',
      description:
        'Évaluation approfondie de l’expérience utilisateur et maîtrise des techniques d’implantologie avancées.',
      start_year: 2018,
      end_year: 2018,
      show: false,
    },
    {
      id: 3,
      title:
        'Master en réhabilitation esthétique et fonctionnelle en prothèse fixe',
      subtitle: ' Fradeani Education Pesaro (Italie),',
      description:
        'Préparation scientifique rigoureuse avant les études supérieures en médecine et sciences de la santé.',
      start_year: 2015,
      end_year: 2017,
      show: false,
    },
    {
      id: 2,
      title: 'Doctorat en Médecine Dentaire',
      subtitle: 'Faculté de Médecine Dentaire, Monastir',
      description:
        'Approche Design Thinking pour résoudre les problématiques cliniques complexes et optimiser les protocoles de soins.',
      start_year: 2004,
      end_year: 2011,
      show: false,
    },
  ];

  /** Ouvre / ferme un accordéon */
  toggle(degree: Degree): void {
    degree.show = !degree.show;
  }
}
